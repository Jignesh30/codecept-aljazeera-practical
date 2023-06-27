# codecept-aljazeera-practical

# Clone this repo

```
Step 1: Create a new Directory into the drive(C: or D:) <Directory Name>
Step 2: Open this folder <Directory Name>
Step 3: Execute git clone https://github.com/Jignesh30/codecept-aljazeera-practical.git Command
Step 4: Navigate to "codecept-aljazeera-practical" directory and open in VS Code 
```

# Install Node Modules Dependencies

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

# Installing Allure-Framework

```
Step 1: Download Framwork Latest Version from this Link https://github.com/allure-framework/allure2/releases/
Step 2 : Extract the the Downloaded Zip file
Step 3 : Copy this "allure-2.22.4\bin" path from extracted folder and add into system environment path variables
Step 4 : Open new Command Prompt and Verify Installtion by executing "allure --version"
```

## Installing Allure Plugin

```
npm install @codeceptjs/allure-legacy --save-dev
```


# Test Execution and Reporting

## Execute Test

```
npx codeceptjs run --features
```

## Viewing Report

```
Open new Command Prompt and execute command "allure server <path/to/output/directory>"
For eg. allure server output/
```