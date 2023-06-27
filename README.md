# codecept-aljazeera-practical

# Clone this repo

```
Step 1: git clone https://github.com/Jignesh30/codecept-aljazeera-practical.git
Step 2: Navigate to "codecept-aljazeera-practical" directory
```

# Install Dependencies

```
1. npx create-codeceptjs . --webdriverio
2. npm install selenium-standalone --save-dev
3. npm install --save-dev webdriverio@^6.12.1
4. npm install @codeceptjs/allure-legacy --save-dev
```

# Start Server 

## Execute this command in another Terminal
``` 
npx selenium-standalone install && npx selenium-standalone start
```

# Execute Tests

```
npx codeceptjs run --features
```

# Generate Report

## Installing Allure-Framework

```
Step 1: Download Framwork Latest Version from this Link https://github.com/allure-framework/allure2/releases/
Step 2 : Extract the the Downloaded Zip file
Step 3 : Copy this "allure-2.22.4\bin" path from extracted folder and add into path
Step 4 : Verify Installtion "allure --version"
```

## Installing Allure Plugin

```
npm install @codeceptjs/allure-legacy --save-dev
```

## Viewing Report

```
allure server <path/to/output/directory>
For eg. allure server output/
```