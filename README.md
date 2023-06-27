# codecept-aljazeera-practical

# Install Dependencies

```
1. npx create-codeceptjs . --webdriverio
2. npm install selenium-standalone --save-dev
3. npm install --save-dev webdriverio@^6.12.1
4. npm install @codeceptjs/allure-legacy --save-dev
```

# Start Server 

```
npx selenium-standalone install && npx selenium-standalone start
```

# Execute Tests

```
npx codeceptjs run --features
```