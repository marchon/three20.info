<?= $this->pageTitle() ?>
=========================

We're going to build a GitHub iPhone app using the public [GitHub api](http://develop.github.com/).
The goal throughout these tutorials is to introduce you to the various aspects of three20 while
building something with a clear final result and purpose.

Before we begin, I want to give thanks to Joe Hewitt for his work on the three20 library.
Building an app like this would take a lot longer to develop and design without it.

Let's get started!

To begin, let's start a new project. We're going to build this app using Core Data (don't worry if
you haven't used it yet, it's surprisingly easy to pick up). To speed up this step, I'm going to
use [the three20 project templates](/setup/templates).

<div class="image" markdown=1>![Create a new project](/gfx/tutorial/github/newproject.png 409x318)</div>

Once you've created the project, make sure you can build and run it. The default three20 template
app should load three20.info in a web browser.

Let's start looking at the code.

Three20 and URL-Based Navigation
================================

Open AppDelegate.m and check out the following code in `applicationDidFinishLaunching`.

."brush: obj-c"
    TTNavigator* navigator = [TTNavigator navigator];
    navigator.persistenceMode = TTNavigatorPersistenceModeAll;
    
    TTURLMap* map = navigator.URLMap;
    [map from:@"*" toViewController:[TTWebController class]];

This is where we start adding the basic navigation mappings. This mapping will catch any url and
open it with the standard three20 web controller, which displays a web view with standard toolbar
buttons.

."brush: obj-c"
    if (![navigator restoreViewControllers]) {
      [navigator openURL:@"http://three20.info" animated:NO];
    }

Now that we've set up some basic mappings, we launch the app with the default URL, in this case
three20.info.

<div class="image" markdown=1>![github.com](/gfx/tutorial/github/three20info.png 320x480)</div>

Adding Our First Three20 Controller
===================================

Let's start off with something personable; a user view.

This part of the tutorial is going to cover creating a three20 table view controller, building a
url request-based model, and populating the table with content retrieved from the web.

Let's start by creating a new view controller. You can name it whatever you like, but I'll refer
to it as `UserViewController` from here on out. I create my view controllers from the
Objective-C class template to avoid having to remove the stock code placed in the UIViewController
subclass template, so bear that in mind as we plow through the code.

Once you've created your controller, open the .h file and replace UIViewController with
TTTableViewController.

."brush: obj-c"
    @interface UserViewController : TTTableViewController {

    }


