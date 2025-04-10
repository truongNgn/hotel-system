CREATE DATABASE HotelManagement;
USE HotelManagement;
Drop database HotelManagement
--1 Tạo Branch
CREATE TABLE Branch (
    BranchID INT PRIMARY KEY ,
    BranchName VARCHAR(100),
    Addresss VARCHAR(255),
    Phone VARCHAR(20)
);
INSERT INTO Branch (BranchID ,BranchName, Addresss, Phone) VALUES
(1,'Chi nhánh Hà Nội', '123 Đường A, Hà Nội', '0241234567'),
(2,'Chi nhánh TP.HCM', '456 Đường B, Quận 1, TP.HCM', '0289876543');

SELECT * FROM Branch WHERE BranchID = 1;

--2 Tạo account
CREATE TABLE Account (
    AccountID INT PRIMARY KEY ,
    Username VARCHAR(50) UNIQUE,
    Password VARCHAR(100),
    Role VARCHAR(50),
    Status VARCHAR(20)
);
INSERT INTO Account (AccountID, Username, Password, Role, Status) VALUES
(1, 'admin1', '123456', 'Admin', 'Active'),
(2, 'staff1', '123456', 'Employee', 'Active'),
(3, 'khach1', '123456', 'Customer', 'Active');




--3 Nhân viên
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FullName VARCHAR(100),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    Position VARCHAR(50),
    BranchID INT,
    AccountID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    FOREIGN KEY (AccountID) REFERENCES Account(AccountID)
);
INSERT INTO Employee (EmployeeID, FullName, Phone, Email, Position, BranchID, AccountID) VALUES
(1,'Nguyễn Văn A', '0911222333', 'nva@hotel.com', 'Lễ tân', 1, 2);



--4 Khách hàng
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY ,
    FullName VARCHAR(100),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    Address VARCHAR(255),
    AccountID INT,
    FOREIGN KEY (AccountID) REFERENCES Account(AccountID)
);
INSERT INTO Customer (CustomerID, FullName, Phone, Email, Address, AccountID) VALUES
(1, 'Trần Thị B', '0903444555', 'ttb@gmail.com', '789 Đường C, Đà Nẵng', 3);



--5 Phòng
CREATE TABLE Room (
    RoomID INT PRIMARY KEY,
    RoomNumber VARCHAR(20),
    Type VARCHAR(50),
    Status VARCHAR(20),
    Price DECIMAL(10, 2),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO Room (RoomID, RoomNumber, Type, Status, Price, BranchID) VALUES
(1, '101', 'Phòng đơn', 'Trống', 500000, 1),
(2, '102', 'Phòng đôi', 'Đang sử dụng', 800000, 1);



--6 Các món ăn
CREATE TABLE Dish (
    DishID INT PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    State VARCHAR(20),
    Category VARCHAR(50),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO Dish (DishID, Name, Description, Price, State, Category, BranchID) VALUES
(1, 'Cơm gà', 'Cơm gà chiên giòn', 60000, 'Còn món', 'Món chính', 1),
(2, 'Súp cua', 'Súp cua thơm ngon', 40000, 'Còn món', 'Khai vị', 1);


--7 Dịch vụ
CREATE TABLE AdditionalService (
    ServiceID INT PRIMARY KEY,
    ServiceName VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO AdditionalService (ServiceID, ServiceName, Description, Price, BranchID) VALUES
(1, 'Giặt ủi', 'Dịch vụ giặt quần áo', 30000, 1),
(2, 'Spa', 'Dịch vụ thư giãn cao cấp', 200000, 1);



--8 Ca làm việc
CREATE TABLE Shift (
    ShiftID INT PRIMARY KEY ,
    ShiftName VARCHAR(50),
    StartTime TIME,
    EndTime TIME,
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO Shift (ShiftID, ShiftName, StartTime, EndTime, BranchID) VALUES
(1, 'Ca sáng', '06:00:00', '14:00:00', 1),
(2, 'Ca chiều', '14:00:00', '22:00:00', 1);



--9 Phân công ca
CREATE TABLE ShiftAssignment (
    ShiftAssignmentID INT PRIMARY KEY,
    EmployeeID INT,
    ShiftID INT,
    Date DATE,
    AssignedBy INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID),
    FOREIGN KEY (ShiftID) REFERENCES Shift(ShiftID),
    FOREIGN KEY (AssignedBy) REFERENCES Employee(EmployeeID)
);
INSERT INTO ShiftAssignment (ShiftAssignmentID, EmployeeID, ShiftID, Date, AssignedBy) VALUES
(1, 1, 1, '2025-04-09', 1);


-- 10 Đặt dịch vụ
CREATE TABLE Orderfood (
    OrderID INT PRIMARY KEY,
    OrderType VARCHAR(50),
    CustomerID INT,
    EmployeeID INT,
    OrderDate DATE,
    Status VARCHAR(50),
    TotalAmount DECIMAL(10, 2),
    BookingMethod VARCHAR(50),
    Notes TEXT,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);
INSERT INTO Orderfood (OrderID, OrderType, CustomerID, EmployeeID, OrderDate, Status, TotalAmount, BookingMethod, Notes) VALUES
(1, 'Đặt phòng', 1, 1, '2025-04-09', 'Đã thanh toán', 830000, 'Online', 'Khách đặt qua website');



--11 Hóa đơn cho đơn hàng
CREATE TABLE Invoice (
    InvoiceID INT PRIMARY KEY,
    OrderID INT,
    InvoiceDate DATE,
    TotalAmount DECIMAL(10, 2),
    PaymentStatus VARCHAR(50),
    PaymentMethod VARCHAR(50),
    InvoiceType VARCHAR(50),
    FOREIGN KEY (OrderID) REFERENCES Orderfood (OrderID)
);
INSERT INTO Invoice (InvoiceID, OrderID, InvoiceDate, TotalAmount, PaymentStatus, PaymentMethod, InvoiceType) VALUES
(1, 1, '2025-04-09', 830000, 'Đã thanh toán', 'Tiền mặt', 'Hóa đơn đặt phòng');



--12 Thanh toán
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY,
    InvoiceID INT,
    PaymentDate DATE,
    Amount DECIMAL(10, 2),
    PaymentType VARCHAR(50),
    PaymentMethod VARCHAR(50),
    FOREIGN KEY (InvoiceID) REFERENCES Invoice(InvoiceID)
);
INSERT INTO Payment (PaymentID, InvoiceID, PaymentDate, Amount, PaymentType, PaymentMethod) VALUES
(1, 1, '2025-04-09', 830000, 'Toàn phần', 'Tiền mặt');


--13 Chi tiết đơn hàng món ăn hoặc phòng
CREATE TABLE OrderDetail (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    DishID INT,
    RoomID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orderfood (OrderID),
    FOREIGN KEY (DishID) REFERENCES Dish(DishID),
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);
INSERT INTO OrderDetail (OrderDetailID, OrderID, DishID, RoomID, Quantity, Price) VALUES
(1, 1, 1, 2, 1, 60000);



--14 Chi tiết đơn hàng dịch vụ phụ.
CREATE TABLE OrderServiceDetail (
    OrderServiceDetailID INT PRIMARY KEY ,
    OrderID INT,
    ServiceID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orderfood (OrderID),
    FOREIGN KEY (ServiceID) REFERENCES AdditionalService(ServiceID)
);
INSERT INTO OrderServiceDetail (OrderServiceDetailID, OrderID, ServiceID, Quantity, Price) VALUES
(1, 1, 1, 1, 30000);



--15 Lịch sử thay đổi trạng thái của phòng
CREATE TABLE RoomStatusLog (
    RoomStatusLogID INT PRIMARY KEY,
    RoomID INT,
    Status VARCHAR(50),
    ChangeDate DATE,
    OrderID INT,
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID),
    FOREIGN KEY (OrderID) REFERENCES Orderfood (OrderID)
);
INSERT INTO RoomStatusLog (RoomStatusLogID, RoomID, Status, ChangeDate, OrderID) VALUES
(1, 2, 'Đang sử dụng', '2025-04-09', 1);


-- Tổng doanh thu theo chi nhánh
SELECT Branch.BranchName, SUM(Invoice.TotalAmount) AS TotalRevenue
FROM Invoice
JOIN Orderfood ON Invoice.OrderID = Orderfood.OrderID
JOIN Employee ON Orderfood.EmployeeID = Employee.EmployeeID
JOIN Branch ON Employee.BranchID = Branch.BranchID
GROUP BY Branch.BranchName;

--Lịch sử trạng thái của một phòng
SELECT Room.RoomNumber, RoomStatusLog.Status, RoomStatusLog.ChangeDate
FROM RoomStatusLog
JOIN Room ON RoomStatusLog.RoomID = Room.RoomID
WHERE Room.RoomNumber = '101'
ORDER BY RoomStatusLog.ChangeDate DESC;

