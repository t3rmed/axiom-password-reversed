# Password Encryption Reverse Engineering

## About me
As a developer, I like seeing this from both sides. I both love creating encryption and reversing it all the same. I'm nothing special at reverse engineering, but I'm learning. I want to share my experiences with people who are also interested in getting into reversing. 

I more-so specialize in WAFs and pentesting, but reverse engineering is still close to home. I hope someone can learn a bit about this along with me.

## Overview

While working on a sign-up bot for https://axiom.trade, I encountered an interesting challenge related to the password parameter in the payload. The parameter was named `b64password`, and upon closer inspection, I realized it wasn't a standard base64 encoded string. Through this guide, we'll walk through how I ended up reversing it.

## Starting Point

I began by examining JavaScript files in the `/_next/static/chunks` directory, searching for references to `b64password`. One file, in particular, stood out:

- **File:** [9093-71ce2af51f9586ef.js](https://axiom.trade/_next/static/chunks/9093-71ce2af51f9586ef.js)

I found some references to the `b64password` string, but despite its 16,000+ lines of code, this file didn't provide clear clues about the password hashing process. However, further searching led me to another file:

- **File:** [8668-ca4155b1854f344f.js](https://axiom.trade/_next/static/chunks/8668-ca4155b1854f344f.js)

This file contained the key to understanding the encryption process.

## Key Findings

The following code snippet from [8668-ca4155b1854f344f.js](https://axiom.trade/_next/static/chunks/8668-ca4155b1854f344f.js) reveals the encryption logic:

```javascript
var a = r(75927).Buffer; // creates a buffer
// this is our salt - an unsigned integer array. static everytime.
let n = new Uint8Array([217, 3, 161, 123, 53, 200, 206, 36, 143, 2, 220, 252, 240, 109, 204, 23, 217, 174, 79, 158, 18, 76, 149, 117, 73, 40, 207, 77, 34, 194, 196, 163]),
    s = async e => {
        let t = new TextEncoder().encode(e),
            r = await window.crypto.subtle.importKey("raw", t, "PBKDF2", !1, ["deriveBits"]),
            s = await window.crypto.subtle.deriveBits({
                name: "PBKDF2", // PBKDF2 is the type of encryption
                salt: n, // the unsigned int is our salt
                iterations: 6e5, // 6e5 = 6x10^5 = 600000
                hash: "SHA-256" // hash our password using SHA-256
            }, r, 256);
        return a.from(s).toString("base64"); // return the hashed password
    };
```

## Creating a solver

Using Golang, I created a solver hosted on an API for easy access to my other program. I can simply just post to http://localhost:3000/solve with the given password as a json parameter. 

**Usage:**
POST http://localhost:3000/solve
Payload: {"password":"password_here"}
Response: {"hashedPassword": "your_hashed_password"}

Check **File** [main.go] for the completed code.
