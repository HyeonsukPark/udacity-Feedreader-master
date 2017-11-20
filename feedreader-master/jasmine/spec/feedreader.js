/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                //feed.url is URL and it should be defined.
                expect(feed.url).toBeDefined();
                //feed.url.length is not 0.
                expect(feed.url.length).not.toBe(0);
            });
        });



        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined', function() {
            allFeeds.forEach(function(feed) {
                //name of feed should be defined. 
                expect(feed.name).toBeDefined();
                //the length of name isn't empty(0).
                expect(feed.name.length).not.toBe(0);
            });
        });


    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('Menu element should be hidden by default', function() {
            //The menu element of body is hidden by default. 
            expect(document.body.classList).toContain('menu-hidden');

        });



        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('is visible when the menu icon is clicked', function() {
            //Set the variable of menu icon.
            var menuIcon = $('.menu-icon-link');
            //When clicking the icon, the menu is visible
            menuIcon.trigger('click');
            expect(document.body.classList.contains("menu-hidden")).toBe(false);
            //When clicking the icon again, the menu  is hidden 
            menuIcon.trigger('click');
            expect(document.body.classList.contains("menu-hidden")).toBe(true);

        });

    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            
                loadFeed(0, done);
        });

        it('has at least a single entry', function() {
            var entry = $('.feed .entry').length;
            expect(entry).toBeGreaterThan(0);
            
        });

    });


    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        //loaded feed. 
        var previousFeed;
              
        beforeEach(function(done) {
            loadFeed(0, function() {
                previousFeed = $('.feed').html();
                done();
            });
        });

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('changes content of feed when a new feed is loaded', function(done) {
            //new feed. 
            loadFeed(1, function() {
                //The new feed is not the previous feed. 
                expect($('.feed').html()).not.toEqual(previousFeed);
                done();
            });
        });

    });


});