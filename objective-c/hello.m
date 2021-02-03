// $ gcc hello.m -o hello-objective-c.exe -lobjc -Wall

#import <objc/objc.h>
#import <objc/NXConstStr.h>
#import <stdio.h>

int main()
{
    id message = @"Hello, Objective-C.";
    printf("%s\n", [message cString]);
    return 0;
}
