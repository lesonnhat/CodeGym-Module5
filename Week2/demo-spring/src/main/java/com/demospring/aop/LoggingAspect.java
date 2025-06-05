package com.demospring.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Around("execution(* com.demospring.service.UserService.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        // Trước khi chạy phương thức
        long startTime = System.currentTimeMillis();
        System.out.println("Bắt đầu: " + joinPoint.getSignature().getName());

        // Chạy phương thức chính
        Object result = joinPoint.proceed();

        // Sau khi chạy phương thức
        long endTime = System.currentTimeMillis();
        System.out.println("Kết thúc: " + joinPoint.getSignature().getName() + ", thời gian thực thi: " + (endTime - startTime) + "ms");

        return result;
    }
}