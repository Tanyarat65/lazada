import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export default function Sidebar() {
    const searchCategories = [
        {
            category: 'อุปกรณ์ อิเล็กทรอนิกส์',
            subCategories: [
                {
                    subCategory: 'โทรศัพท์มือถือ',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'แท็บเล็ต',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'แล็ปท็อป',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'คอมพิวเตอร์ตั้งโต๊ะ',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'กล้อง DSLR',
                    finalSubCategories: ['กล้องพร้อมเลนส์', 'ตัวกล้อง DSLR']
                },
                {
                    subCategory: 'กล้องมิลเลอร์เลส',
                    finalSubCategories: []
                },
                {
                    subCategory: 'กล้องคอมแพค',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'กล้องอินสแตนท์',
                    finalSubCategories: ['กล้องอินสแตนท์', 'ฟิล์มสำหรับกล้องอินสแตนท์', 'อุปกรณ์สำหรับกล้องอินสแตนท์']
                },
                {
                    subCategory: 'กล้องแอ็คชั่นแคม',
                    finalSubCategories: ['กล้องแอ็คชั่นแคม', 'กล้องถ่ายวิดีโอ', 'กล้อง 360 องศา', 'กล้องถ่ายวิดีโอระดับโปร']
                },
                {
                    subCategory: 'โดรน',
                    finalSubCategories: []
                },
                {
                    subCategory: 'กล้องรักษาความปลอดภัย',
                    finalSubCategories: ['กล้องรักษาความปลอดภัย', 'ระบบวงจรปิด', 'ระบบรักษาความปลอดภัย', 'กล้องวงจรปิดปลอม']
                },
                {
                    subCategory: 'เครื่องเล่นเกมคอนโซล',
                    finalSubCategories: ['เครื่องเล่นเกมขนาดพกพา', 'เครื่องเล่นเกมคอนโซล']
                },
            ]
        },
        {
            category: 'อุปกรณ์เสริม อิเล็กทรอนิกส์',
            subCategories: [
                {
                    subCategory: 'อุปกรณ์เสริมมือถือ',
                    finalSubCategories: ['เคสและซองมือถือ', 'แบตเตอรี่สำรอง', 'สายชาร์จ & อุปกรณ์ชาร์จไฟ', 'ที่ชาร์จแบตไร้สาย', 'ฟิล์มกันรอย', 'ซิมการ์ด', 'อุปกรณ์ยึดมือถือในรถ', 'หัวชาร์จ', 'เคสและซองแท็บเล็ต', 'อะไหล่มือถือ', 'แท่นวางมือถือ', 'ที่ห้อยโทรศัพท์และอื่นๆ']
                },
                {
                    subCategory: 'เครื่องเสียง ลำโพง และ หูฟัง',
                    finalSubCategories: ['หูฟัง', 'ลำโพงแบบพกพา', 'โฮมเธียเตอร์', 'เครื่องเล่นเพลงแบบพกพา', 'อุปกรณ์เครื่องเสียงแบบมืออาชีพ', 'อุปกรณ์ดีเจ', 'ลำโพงอัจฉริยะ', 'อุปกรณ์รับ-ส่งสัญญาณบลูทูธ', 'เครื่องเล่น MP3 และ MP4']
                },
                {
                    subCategory: 'อุปกรณ์ไอทีสวมใส่',
                    finalSubCategories: ['สมาร์ทวอทช์ และ อุปกรณ์', 'สายรัดข้อมือเพื่อสุขภาพ', 'แทรคเกอร์ติดตามของหาย', 'แว่น VR', 'อุปกรณ์เสริม VR', 'แว่นอัจฉริยะ']
                },
                {
                    subCategory: 'อุปกรณ์ไอที',
                    finalSubCategories: ['วิทยุสื่อสาร', 'อุปกรณ์พรีเซนเทชั่น', 'เครื่องตรวจจับโลหะ', 'เครื่องแปลภาษา', 'หัวแปลงปลั๊กสากล', 'กระดานวาดภาพกราฟฟิค']
                },
                {
                    subCategory: 'อุปกรณ์จัดเก็บข้อมูล',
                    finalSubCategories: ['ฮาร์ดดิสก์ภายใน', 'ฮาร์ดดิสก์ภายนอก', 'เมมโมรี่การ์ด', 'แฟลชไดร์ฟแบบ OTG', 'แฟลชไดร์ฟ', 'อุปกรณ์จัดเก็บข้อมูลสำหรับ Mac', 'ฮาร์ดดิสก์ภายใน SSD', 'ฮาร์ดดิสก์ภายนอก SSD']
                },
                {
                    subCategory: 'อุปกรณ์เสริมคอมพิวเตอร์',
                    finalSubCategories: ['คีย์บอร์ด', 'เมาส์', 'ซอฟท์แวร์', 'อุปกรณ์กันไฟกระชาก', 'แผ่นรองเมาส์', 'อะแดปเตอร์และสายเคเบิ้ล', 'เครื่องเสียงสำหรับคอมพิวเตอร์', 'มอนิเตอร์', 'ปริ้นเตอร์', 'แสกนเนอร์', 'หมึกปร้ิน', 'เครื่องพิมพ์ฉลาก']
                },
                {
                    subCategory: 'ฮาร์ดแวร์คอมพิวเตอร์',
                    finalSubCategories: ['เมนบอร์ด', 'แรม', 'หน่วยประมวลผลกลาง (Processor)', 'การ์ดจอ', 'อุปกรณ์ฟรอนท์เบย์คอมพิวเตอร์', 'อุปกรณ์จ่ายไฟคอมพิวเตอร์', 'พัดลมระบายความร้อน', 'แผงระบายความร้อน', 'การ์ดเสียง', 'ระบบระบายความร้อนด้วยน้ำ', 'เคสคอมพิวเตอร์']
                },
                {
                    subCategory: 'อุปกรณ์เชื่อมต่ออินเตอร์เน็ต',
                    finalSubCategories: ['เราเตอร์', 'สวิตซ์', 'เราเตอร์แบบ USB', 'โมเด็ม', 'ฮอตสปอต Wi-Fi', 'โมเด็มแบบ USB']
                },
                {
                    subCategory: 'อุปกรณ์เสริมสำหรับเกมคอนโซล',
                    finalSubCategories: ['แผ่นเกมคอนโซล', 'จอยคอนโทรลเลอร์', 'เคสและกระเป๋าสำหรับคอนโซล', 'ฟิล์มกันรอย', 'อุปกรณ์เสริมสำหรับเกมคอนโซล']
                },
                {
                    subCategory: 'อุปกรณ์เสริมกล้อง',
                    finalSubCategories: ['เมมโมรี่การ์ด', 'เลนส์', 'ขาตั้งกล้องแบบขาเดียวและ 3 ขา', 'กระเป๋ากล้อง', 'อุปกรณ์เสริม Action', 'ไฟสตูดิ โอ และอุปกรณ์สตูดิโอ', 'แบตเตอรี่กล้อง', 'กิมบอล และ อุปกรณ์กันสั่น', 'ฟิล์มกล้อง']
                },
            ]
        },
        {
            category: 'ทีวีและเครื่องใช้ไฟฟ้าในบ้าน',
            subCategories: [
                {
                    subCategory: 'ทีวี & วิดีโอ',
                    finalSubCategories: ['สมาร์ททีวี', 'ทีวี', 'มีเดียเพลเยอร์', 'โปรเจคเตอร์', 'กล่องรับสัญญาณทีวี', 'ขาแขวนทีวี', 'สายสัญญาณ', 'รีโมทคอนโทรล']
                },
                {
                    subCategory: 'เครื่องใช้ไฟฟ้าขนาดใหญ่',
                    finalSubCategories: ['แอร์', 'ตู้เย็น', 'ตู้แช่แข็ง', 'เครื่องซักผ้า', 'เครื่องอบผ้า', 'เตาอบแบบฝัง', 'เตาแม่เหล็กและเตาแก๊สไฟฟ้า', 'เครื่องกรองน้ำ', 'ตู้กดน้ำ']
                },
                {
                    subCategory: 'เครื่องใช้ไฟฟ้าในครัวขนาดเล็ก',
                    finalSubCategories: ['เครื่องปั่น ผสมอาหารและบดสับ', 'หม้อหุงข้าว', 'เตาแก๊ส', 'เตาปิ้งย่าง', 'เครื่องคั้นและสกัดนำ้ผลไม้', 'เครื่องชงกาแฟ', 'หม้อทอดไร้นำ้มัน', 'ไมโครเวฟ', 'กาต้มน้ำไฟฟ้า', 'เครื่องปิ้งขนมปัง', 'หม้อนึ่งไฟฟ้า']
                },
                {
                    subCategory: 'เครื่องฟอกและเครื่องทำความเย็นขนาดเล็ก',
                    finalSubCategories: ['เครื่องฟอกอากาศ', 'พัดลมไอเย็น', 'พัดลมตั้งพื้น', 'พัดลมระบายอากาศ', 'พัดลมตั้งโต๊ะ', 'เครื่องเพิ่มความชื้น']
                },
                {
                    subCategory: 'เครื่องใช้ไฟฟ้าในบ้าน',
                    finalSubCategories: ['เครื่องทำนำ้อุ่น', 'เครื่องทำความร้อน', 'หุ่นยนต์ดูดฝุ่น', 'เครื่องดูดฝุ่น', 'เครื่องดูดฝุ่นแบบด้ามจับ', 'อุปกรณ์เสริมเครื่องดูดฝุ่น', 'เตารีด', 'เตารีดไอน้ำ', 'จักรเย็บผ้า']
                },
                {
                    subCategory: 'เครื่องใช้ไฟฟ้าส่วนบุคคล',
                    finalSubCategories: ['เครื่องจัดแต่งทรงผม', 'ไดร์เป่าผม', 'อุปกรณ์กำจัดขน', 'เครื่องโกนหนวดไฟฟ้า', 'อุปกรณ์ตัดแต่งหนวดและเส้นผม', 'แปรงสีฟันไฟฟ้า']
                },
                {
                    subCategory: 'อะไหล่และอุปกรณ์เสริม',
                    finalSubCategories: ['แผ่นกรองสำหรับเครื่องฟอกอกาศ', 'อุปกรณ์เสริมสำหรับเครื่องฟอกอากาศ', 'อะไหล่สำหรับแอร์', 'อุปกรณ์เสริมสำหรับแอร์', 'อุปกรณ์เสริมสำหรับพัดลม', 'อุปกรณ์เสริมสำหรับเครื่องครัวขนาดเล็ก', 'อะไหล่และอุปกรณ์เสริมสำหรับเครื่องชงกาแฟ', 'อุปกรณ์สำหรับเครื่องกรองน้ำ', 'อะไหล่และอุปกรณ์เสริมสำหรับเครื่องซักผ้า']
                },
            ]
        },
        //ตั้งแต่ตรงนี้ Final SubCategories ยังไม่ได้แก้ตามเว็บ
        {
            category: 'สุขภาพและความงาม',
            subCategories: [
                {
                    subCategory: 'ผลิตภัณฑ์ดูแลผิวหน้า',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'เครื่องสำอาง',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'ผลิตภัณฑ์ดูแลผม',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'ผลิตภัณฑ์อาบน้ำและดูแลผิวกาย',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'ของใช้ส่วนตัว',
                    finalSubCategories: ['กล้องพร้อมเลนส์', 'ตัวกล้อง DSLR']
                },
                {
                    subCategory: 'น้ำหอม',
                    finalSubCategories: []
                },
                {
                    subCategory: 'อุปกรณ์เพื่อความงาม',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ผลิตภัณฑ์สำหรับผู้ชาย',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'วิตามินและอาหารเสริม',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์เพื่อสุขภาพ',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ผ้าอ้อมผู้ใหญ่และแผ่นรองซับ',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ถุงยางและเจลหล่อลื่น',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'เด็กอ่อน และของเล่น',
            subCategories: [
                {
                    subCategory: 'สินค้าแม่และเด็ก',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'ผ้าอ้อมและโถนั่งเด็ก',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'นมผงและอาหารสำหรับเด็ก',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'อุปกรณ์จำเป็นสำหรับให้อาหาร',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'รถเข็นเด็ก คาร์ซีทและอุปกรณ์เสริมอื่นๆ',
                    finalSubCategories: ['กล้องพร้อมเลนส์', 'ตัวกล้อง DSLR']
                },
                {
                    subCategory: 'ที่นอนเด็ก, เฟอร์นิเจอร์และอุปกรณ์สำหรับห้องนอนเด็ก',
                    finalSubCategories: []
                },
                {
                    subCategory: 'ผลิตภัณฑ์อาบน้ำและดูแลสุขภาพเด็ก',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เสื้่อผ้าเด็กและเครื่องประดับ',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เกมและของเล่น',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ของเล่นเด็กเด็ก',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'กีฬาและการละเล่นกลางแจ้ง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ของเล่นอิเล็กทรอนิกส์, ของเล่นวิทยุบังคับและรถเด็กเล่น',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'ซูเปอร์มาร์เก็ต และสัตว์เลี้ยง',
            subCategories: [
                {
                    subCategory: 'เครื่องดื่ม',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'อาหารเช้า',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'อาหารและเครื่องปรุง',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'ผักและผลไม้',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'ขนม ช๊อกโกแลตและลูกอม',
                    finalSubCategories: ['กล้องพร้อมเลนส์', 'ตัวกล้อง DSLR']
                },
                {
                    subCategory: 'ดูแลทำความสะอาดบ้าน',
                    finalSubCategories: []
                },
                {
                    subCategory: 'ดูแลเสื้อผ้า',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์สัตว์เลี้่ยง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อาหารและขนมสัตว์เลี้ยง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ยาและผลิตภัณฑ์เพื่อสุขภาพสัตว์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'บ้านและไลฟ์สไตล์',
            subCategories: [
                {
                    subCategory: 'เฟอร์นิเจอร์และอุปกรณ์จัดเก็บ',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'ไฟ',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'ของตกแต่งบ้าน',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'ห้องนอน',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'ห้องน้ำ',
                    finalSubCategories: ['กล้องพร้อมเลนส์', 'ตัวกล้อง DSLR']
                },
                {
                    subCategory: 'เครื่องครัว',
                    finalSubCategories: []
                },
                {
                    subCategory: 'เครื่องเขียนและสำนักงาน',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์ทำความสะอาดและซักรีด',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เครื่องมือและอุปกรณ์ปรับปรุงบ้าน',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์ภายนอกบ้านและเครื่องมือแต่งสวน',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เครื่องดนตรี',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'หนังสือ',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'แฟชั่น และ เครื่องประดับผู้หญิง',
            subCategories: [
                {
                    subCategory: 'เสื้อผ้าผู้หญิง',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'รองเท้าผู้หญิง',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'ชุดชั้นในและชุดนอน',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'ชุดว่ายน้ำ',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'เครื่องตกแต่งผู้หญิง',
                    finalSubCategories: ['กล้องพร้อมเลนส์', 'ตัวกล้อง DSLR']
                },
                {
                    subCategory: 'กระเป๋าผู้หญิง',
                    finalSubCategories: []
                },
                {
                    subCategory: 'แว่นตาผู้หญิง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เครื่องประดับแฟชั่นผู้หญิง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เครื่องประดับและอัญมณีผู้หญิง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'นาฬิกาผู้หญิง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'แฟชั่น และ เครื่องประดับผู้ชาย',
            subCategories: [
                {
                    subCategory: 'เสื้อผ้าผู้ชาย',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'รองเท้าผู้ชาย',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'ชุดชั้นในผู้ชาย',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'เครื่องตกแต่งผู้ชาย',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'กระเป๋าผู้ชาย',
                    finalSubCategories: []
                },
                {
                    subCategory: 'แว่นตาผู้ชาย',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เครื่องประดับแฟชั่นผู้ชาย',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'เครื่องประดับและอัญมณีผู้ชาย',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'นาฬิกาผู้ชาย',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'แฟชั่น และ เครื่องประดับสำหรับเด็ก',
            subCategories: [
                {
                    subCategory: 'เสื้อผ้าเด็กผู้ชาย',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'เสื้อผ้าเด็กผู้เด็ก',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'รองเท้าและเครื่องประดับเด็กผู้ชาย',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'รองเท้าและเครื่องประดับเด็กผู้หญิง',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'นาฬิกาเด็ก',
                    finalSubCategories: []
                },
                {
                    subCategory: 'กระเป๋าเด็ก',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'แว่นตา',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'กีฬาและ การเดินทาง',
            subCategories: [
                {
                    subCategory: 'ฟิตเนส และ การออกกำลังกาย',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'กีฬา และ กิจกรรมกลางแจ้ง',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'ชุดกีฬาชาย',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'รองเท้ากีฬาผู้ชาย',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'ชุดกีฬาหญิง',
                    finalSubCategories: []
                },
                {
                    subCategory: 'รองเท้่ากีฬาผู้หญิง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'กีฬาจักรยาน',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'กีฬาทางน้ำ',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'กีฬาประเภททีม',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'กีฬาที่ใช้ไม้แร็กเกต',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์เสริมสำหรับกีฬา',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'การเดินทาง',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
        {
            category: 'ยานยนต์ และอุปกรณ์',
            subCategories: [
                {
                    subCategory: 'นำ้มันเครื่องและของเหลว',
                    finalSubCategories: ['โทรศัพท์มือถือ']
                },
                {
                    subCategory: 'รถยนต์',
                    finalSubCategories: ['แท็บเล็ต']
                },
                {
                    subCategory: 'กล้องรถยนต์',
                    finalSubCategories: ['แล็ปท็อป', 'เกมมิ่ง', 'แล็ปท็อป 2 in 1']
                },
                {
                    subCategory: 'เครื่องเสียงรถยนต์',
                    finalSubCategories: ['เกมมิ่ง', 'ออลอินวัน', 'คอมประกอบ']
                },
                {
                    subCategory: 'ล้อและยางรถยนต์',
                    finalSubCategories: []
                },
                {
                    subCategory: 'ชิ้นส่วนและอะไหล่รถยนต์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์ตกแต่งรถยนต์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'อุปกรณ์ดูแลรักษารถยนต์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'มอเตอร์ไซค์และอุปกรณ์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ล้อและยางมอเตอร์ไซค์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ชุดแต่ง,อะไหล่มอเตอร์ไซค์',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
                {
                    subCategory: 'ชุดขับขี่และหมวกกันน็อก',
                    finalSubCategories: ['กล้องคอมแพค', 'กล้องถ่ายใต้น้ำ']
                },
            ]
        },
    ];

    const [isCategoryHovered, setIsCategoryHovered] = useState(false);
    const [isSubCategoriesHovered, setIsSubCategoriesHovered] = useState(false);
    const [subCategories, setSubCategories] = useState([]);
    const [finalCategories, setFinalCategories] = useState([]);
    const [categoryDetectParameter, setCategoryDetectParameter] = useState('');
    const [subCategoryDetectParameter, setSubCategoryDetectParameter] = useState('');

    // On Mouse Enter
    const handleCategoryOnMouseEnter = (subCategories, category) => {
        setIsCategoryHovered(true);
        setSubCategories(subCategories);
        setCategoryDetectParameter(category);
    };
    const handleSubCategoriesOnMouseEnter = (finalSubCategories, subCategory) => {
        setIsCategoryHovered(true);
        setIsSubCategoriesHovered(true);
        setFinalCategories(finalSubCategories);
        setSubCategoryDetectParameter(subCategory);
    };
    const handleOutSubCategoriesOnMouseEnter = () => {
        setIsCategoryHovered(true);
        setIsSubCategoriesHovered(true);
    };

    const handleFinalSubCategoriesOnMouseEnter = () => {
        setIsCategoryHovered(true);
        setIsSubCategoriesHovered(true);
    };

    // On Mouse Leave
    const handleCategoryOnMouseLeave = () => {
        setIsCategoryHovered(false);
    };

    const handleSubCategoriesOnMouseLeave = () => {
        setIsCategoryHovered(false);
        setIsSubCategoriesHovered(false);
    };
    const handleFinalSubCategoriesOnMouseLeave = () => {
        setIsCategoryHovered(false);
        setIsSubCategoriesHovered(false);
    };
    const handleClearDetectParameter = () => {
        setCategoryDetectParameter('');
        setSubCategoryDetectParameter('');
    }

    return (
        <>
            <div className='grid grid-cols-[200px] md:grid-cols-[200px_200px] lg:grid-cols-[200px_200px_200px] h-[344px] absolute top-0 left-0 z-50' onMouseLeave={() => handleClearDetectParameter()}>
                <div className='bg-white shadow-basic'>
                    {searchCategories.map((search, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleCategoryOnMouseEnter(search.subCategories, search.category)}
                            onMouseLeave={() => handleCategoryOnMouseLeave()}
                            className='cursor-pointer'
                        >
                            <div className={`flex justify-between items-center py-1 pl-2 pr-2 hover:text-[#f36d00] hover:bg-[#EDEFF1] group ${search.category === categoryDetectParameter ? 'text-[#f36d00] bg-[#EDEFF1]': 'text-white'}`}>
                                <div className={`text-[13px] group-hover:text-[#f36d00] overflow-hidden whitespace-nowrap overflow-ellipsis ${search.category === categoryDetectParameter ? 'text-[#f36d00] bg-[#EDEFF1]': 'text-black'}`}>{search.category}</div>
                                <FaAngleRight />
                            </div>
                        </div>
                    ))}
                </div>

                {isCategoryHovered && (
                    <div
                        onMouseEnter={() => handleOutSubCategoriesOnMouseEnter()}
                        onMouseLeave={() => handleSubCategoriesOnMouseLeave()}
                        className=' bg-white shadow-no-left'
                    >
                        {subCategories.map((sub, subIndex) => (
                            <div 
                                key={subIndex}
                                onMouseEnter={() => handleSubCategoriesOnMouseEnter(sub.finalSubCategories, sub.subCategory)}
                                onMouseLeave={() => handleSubCategoriesOnMouseLeave()}
                                className='cursor-pointer'
                            >
                                <div className={`flex justify-between items-center py-1 pl-2 pr-2 hover:text-[#f36d00] hover:bg-[#EDEFF1] group ${sub.subCategory === subCategoryDetectParameter ? 'text-[#f36d00] bg-[#EDEFF1]': 'text-white'}`}>
                                    <div className={`text-[13px] group-hover:text-[#f36d00] overflow-hidden whitespace-nowrap overflow-ellipsis ${sub.subCategory === subCategoryDetectParameter ? 'text-[#f36d00] bg-[#EDEFF1]': 'text-black'}`}>{sub.subCategory}</div>
                                    <FaAngleRight />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {isSubCategoriesHovered && (
                    <div 
                        onMouseEnter={() => handleFinalSubCategoriesOnMouseEnter()}
                        onMouseLeave={() => handleFinalSubCategoriesOnMouseLeave()}
                        className=' bg-white shadow-no-left'
                    >
                        {finalCategories.map((final, finalIndex) => (
                            <div
                                key={finalIndex}
                                className='cursor-pointer text-[13px] py-1 pl-2 hover:text-[#f36d00] overflow-hidden whitespace-nowrap overflow-ellipsis'
                            >
                                {final}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
