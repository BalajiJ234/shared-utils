# Shared Utils

---

This repository contains shared utility functions used across multiple microservices and microfrontends.

## Installation

To install this package, run:

```bash
npm i @balajidev/shared-utils
```

## Usage

### JWT Utilities

These utilities help you manage JSON Web Tokens (JWT) for authentication and authorization.

```bash
const { signToken, verifyToken } = require('utils/auth/jwt');

const token = signToken({ userId: 123 });
const payload = verifyToken(token);
console.log(payload); // { userId: 123, iat: ..., exp: ... }
```

### Password Utilities

These utilities provide functions to hash and compare passwords securely.

```bash
const { hashPassword, comparePassword } = require('utils/auth/password');

const hashedPassword = hashPassword('yourPassword');
console.log(comparePassword('yourPassword', hashedPassword)); // true
```

### Email Validator

This utility helps validate email addresses.

```bash
const { validateEmail } = require('utils/validation/emailValidator');

console.log(validateEmail('test@example.com')); // true
```

### Logging

These utilities provide centralized logging functions, including audit logging for security-sensitive operations.

```bash
const logger = require('utils/logging/logger');
const { auditLog } = require('utils/logging/audit');

logger.info('This is an info message');
logger.error('This is an error message');

auditLog('User login attempt', { userId: 123 });
```

### Error Handling

Custom error classes for consistent error management across your application.

```bash
const { NotFoundError } = require('utils/errors');

throw new NotFoundError('Resource not found');
```

### Date and Time Utilities

Utilities for date formatting and time zone conversion.

```bash
const { formatDate } = require('utils/date/format');
const { convertToTimeZone } = require('utils/date/timeZone');

const formattedDate = formatDate(new Date(), 'yyyy-MM-dd');
console.log(formattedDate); // e.g., 2024-08-16

const utcDate = convertToTimeZone(new Date(), 'UTC');
console.log(utcDate); // UTC date
```

### Object Utilities

Utility functions for deep cloning objects.

```bash
const { deepClone } = require('utils/object/deepClone');

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone); // { a: 1, b: { c: 2 } }
```

### UUID Generation

Utility for generating universally unique identifiers (UUIDs).

```bash
const { generateUUID } = require('utils/id/uuid');

const id = generateUUID();
console.log(id); // e.g., '6f1d23e4-99e2-4c87-8f14-b61e123e4567'
```

### Notification Utilities

Send emails and push notifications using shared utilities.

```bash
const { sendEmail } = require('utils/notification/email');
const { sendPushNotification } = require('utils/notification/push');

sendEmail('user@example.com', 'Welcome', 'Thank you for signing up!');
sendPushNotification('deviceToken123', 'You have a new message!');
```

### HTTP Client

A pre-configured HTTP client for making API requests.

```bash
const httpClient = require('utils/api/httpClient');

httpClient.get('/api/users/123')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Rate Limiting

This utility provides rate limiting middleware for Express.js applications.

```bash
const { createRateLimiter } = require('utils/rateLimiter');
const rateLimiter = createRateLimiter({ windowMs: 60000, max: 10 });
app.use('/api', rateLimiter);

```

### Caching

These utilities help with caching data in Redis.

```bash
const { cacheResponse, getCachedResponse } = require('utils/cache');

await cacheResponse('myKey', { data: 'value' });
const data = await getCachedResponse('myKey');
console.log(data); // { data: 'value' }
```

### Configuration Management

This utility loads and validates configuration from environment variables.

```bash
const { config } = require('utils/config');
console.log(config.PORT); // Outputs the port number from environment or default
```

### Internationalization (i18n)

This utility supports translations and localization.

```bash
const { setLocale, translate } = require('utils/i18n');

setLocale('fr');
console.log(translate('greeting')); // Outputs 'Bonjour'
```

### Security Utilities

Input sanitization and encryption/decryption utilities.

```bash
const { sanitizeInput } = require('utils/security/sanitize');
const { encrypt, decrypt } = require('utils/security/encryption');

const safeInput = sanitizeInput('<script>alert("XSS")</script>');
console.log(safeInput); // Cleaned input

const encryptedData = encrypt('sensitive data');
const decryptedData = decrypt(encryptedData);
console.log(decryptedData); // 'sensitive data'
```
