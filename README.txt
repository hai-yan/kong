How to run tests:
1. Install modules by: npm install
2. Run the tests be:
   npm run test-services
   npm run test-routes


Design:
Because I am asked to create test suites for creating new services and routes with several hours.
So I just create 2 simple flows about them, even there are many details need to be checked when doing automation.
For others:
1. 2 test suite for the 2 flows so they can be ran in CI parallel.
2. Tests are written in PO model.
3. Test data generated before needs to be cleared before running with database operations.
   We can also prepare services for routes test by database operations.
4. Reports for different test suites must be generated in different directory. And screenshots are generated after tests fails.
