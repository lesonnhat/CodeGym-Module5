package com.demospring.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public void getUserById(Long id) {
        // Logic chính, không có logging
        System.out.println("Đang tìm user với id: " + id);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void deleteUser(Long id) {
        // Logic chính, không có logging
        System.out.println("Đang xóa user với id: " + id);
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}