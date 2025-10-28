# Contributing to SaaS Subscription Management Platform

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and professional in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, Node version, etc.)

### Suggesting Enhancements

1. Check if the enhancement has been suggested
2. Create a new issue describing:
   - The problem it solves
   - Proposed solution
   - Alternative solutions considered
   - Any implementation ideas

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Write or update tests as needed
5. Ensure all tests pass (`npm test`)
6. Update documentation if needed
7. Commit your changes with clear messages
8. Push to your fork
9. Submit a pull request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/saas-subscription-platform.git

# Install dependencies
npm install
cd packages/api && npm install
cd ../web && npm install

# Start development environment
docker-compose up -d
npm run dev
```

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Testing

- Write unit tests for new features
- Ensure existing tests pass
- Aim for high test coverage
- Test edge cases

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Reference issues when applicable (#123)
- Keep messages concise but informative

Example:
```
Add subscription pause functionality

- Implement pause/resume endpoints
- Add pause duration validation
- Update subscription model
- Add unit tests

Fixes #123
```

### Documentation

- Update README.md for new features
- Add JSDoc comments to functions
- Update API documentation
- Include examples when helpful

## Project Structure

Please maintain the existing project structure:
- `packages/api` - Backend code
- `packages/web` - Frontend code
- Keep related files together
- Use clear, descriptive file names

## Questions?

Feel free to open an issue for any questions about contributing!
