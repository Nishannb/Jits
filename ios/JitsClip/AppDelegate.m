//
//  AppDelegate.m
//  JitsClip
//
//  Created by admin on R 6/02/01.
//

#import "AppDelegate.h"
#import "NotificationManager.h"


@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // Request notification permission
      [NotificationManager requestNotificationPermissionWithCompletion:^(BOOL granted) {
          if (granted) {
              // Permission granted, schedule a notification
              NSDate *scheduledDate = [NSDate dateWithTimeIntervalSinceNow:10]; // Schedule a notification 10 seconds from now
              [NotificationManager scheduleNotificationWithTitle:@"New Notification" body:@"This is your first notification!" at:scheduledDate];
          } else {
              // Permission not granted
              NSLog(@"Notification permission not granted.");
          }
      }];
    return YES;
}



#pragma mark - UISceneSession lifecycle


- (UISceneConfiguration *)application:(UIApplication *)application configurationForConnectingSceneSession:(UISceneSession *)connectingSceneSession options:(UISceneConnectionOptions *)options {
    // Called when a new scene session is being created.
    // Use this method to select a configuration to create the new scene with.
    return [[UISceneConfiguration alloc] initWithName:@"Default Configuration" sessionRole:connectingSceneSession.role];
}


- (void)application:(UIApplication *)application didDiscardSceneSessions:(NSSet<UISceneSession *> *)sceneSessions {
    // Called when the user discards a scene session.
    // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
    // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
}


@end
