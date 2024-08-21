# Changelog

## [1.1.10] - 2024-08-21

- Created **authMiddleware.js**: The authenticate middleware checks for a valid JWT and attaches the decoded data to req.user.
- Updated **task-service**: The task-service can now use the authenticate middleware from @balajidev/shared-utils.
- **Error Handling**: Added an UnauthorizedError class for handling authentication-related errors.

## [1.1.9] - 2024-08-19

- Document Update

## [1.1.8] - 2024-08-19

### Middleware errorHandler

- **errorHandler** - handle error type

## [1.1.7] - 2024-08-19

### Subfolder index.js Files:

**errors/index.js** : Consolidates and exports NotFoundError, ValidationError, and any other error classes.
**validation/index.js** : Consolidates and exports taskValidator, emailValidation, and any other validation functions.
Similar exports were done in other subfolders as well.

**Main src/index.js** :

The main index.js now exports all utilities, including the newly added taskValidator, NotFoundError, and ValidationError.

## [1.1.6] - 2024-08-18

### Added

- **Rate Limiting**: Added utility for rate limiting API requests.
- **Caching**: Added Redis-based caching utilities.
- **Configuration Management**: Added utilities for loading and validating environment-specific configurations.
- **Internationalization (i18n)**: Added utilities for supporting multiple languages.

## [1.1.5] - 2024-08-17

- **Document updated** : Both Readme and Changelog files.

## [1.1.4] - 2024-08-17

### Added

- **Object Utilities**: Provided deep cloning functionality for objects.
- **UUID Generation**: Utility for generating universally unique identifiers (UUIDs).
- **Notification Utilities**: Added utilities for sending emails and push notifications.
- **HTTP Client**: Pre-configured HTTP client for making API requests.
- **Rate Limiting**: Middleware for rate limiting API requests.
- **Security Utilities**: Input sanitization and encryption/decryption utilities.

## [1.1.3] - 2024-08-17

### Added

- **Password Utilities**: Introduced functions for hashing and comparing passwords securely.
- **Error Handling**: Added custom error classes for consistent error management.
- **Date and Time Utilities**: Utilities for formatting dates and converting between time zones.

## [1.1.2] - 2024-08-17

### Added

- **JWT Utilities**: Added utilities for creating and verifying JSON Web Tokens (JWT) for authentication.
- **Email Validator**: Implemented an email validation utility.
- **Logging**: Centralized logging functions, including audit logging for security-sensitive operations.
