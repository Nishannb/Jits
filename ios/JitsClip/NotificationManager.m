// NotificationManager.m

#import "NotificationManager.h"
#import <UserNotifications/UserNotifications.h>

@implementation NotificationManager

+ (void)requestNotificationPermissionWithCompletion:(void (^)(BOOL))completion {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert | UNAuthorizationOptionSound | UNAuthorizationOptionBadge) completionHandler:^(BOOL granted, NSError * _Nullable error) {
        if (completion) {
            completion(granted);
        }
        
        if (granted) {
            // Permission granted, schedule a notification
            NSDate *scheduledDate = [NSDate dateWithTimeIntervalSinceNow:10]; // Schedule a notification 10 seconds from now
            [self scheduleNotificationWithTitle:@"New Notification" body:@"This is your first notification!" at:scheduledDate];
        }
    }];
}

+ (void)scheduleNotificationWithTitle:(NSString *)title body:(NSString *)body at:(NSDate *)date {
    UNMutableNotificationContent *content = [[UNMutableNotificationContent alloc] init];
    content.title = title;
    content.body = body;
    content.sound = [UNNotificationSound defaultSound];
    
    UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:[date timeIntervalSinceNow] repeats:NO];
    
    NSString *identifier = [NSString stringWithFormat:@"Notification_%@", [[NSUUID UUID] UUIDString]];
    UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:identifier content:content trigger:trigger];
    
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
        if (error) {
            NSLog(@"Failed to schedule notification: %@", error);
        } else {
            NSLog(@"Notification scheduled successfully.");
        }
    }];
}

@end

