//
//  NotificationManager.h
//  Jits
//
//  Created by admin on R 6/05/13.
//

// NotificationManager.h

#import <Foundation/Foundation.h>

@interface NotificationManager : NSObject

+ (void)requestNotificationPermissionWithCompletion:(void (^)(BOOL granted))completion;
+ (void)scheduleNotificationWithTitle:(NSString *)title body:(NSString *)body at:(NSDate *)date;

@end

