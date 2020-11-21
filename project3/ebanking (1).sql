-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2020 at 02:09 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebanking`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `Message` varchar(250) COLLATE utf8_bin NOT NULL,
  `SendFrom` varchar(250) COLLATE utf8_bin NOT NULL,
  `SendTo` varchar(250) COLLATE utf8_bin NOT NULL,
  `Date` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`Message`, `SendFrom`, `SendTo`, `Date`) VALUES
('Hello sadat,How are you?', 'admin1', 'sadat123', 'Fri Nov 20 2020 23:48:19 GMT+0600 (Bangladesh Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `ID` int(250) NOT NULL,
  `UserName` varchar(250) COLLATE utf8_bin NOT NULL,
  `Salary` varchar(250) COLLATE utf8_bin NOT NULL,
  `Date` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`ID`, `UserName`, `Salary`, `Date`) VALUES
(10, 'gazi123', '15000', '11/20/2020'),
(4, 'sadat123', '10000', '11/17/2020');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `tid` int(11) NOT NULL,
  `sent` int(11) NOT NULL,
  `receive` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(250) NOT NULL,
  `Name` varchar(250) COLLATE utf8_bin NOT NULL,
  `UserName` varchar(250) COLLATE utf8_bin NOT NULL,
  `Email` varchar(250) COLLATE utf8_bin NOT NULL,
  `ContactNO` varchar(250) COLLATE utf8_bin NOT NULL,
  `NID` varchar(250) COLLATE utf8_bin NOT NULL,
  `Gender` varchar(250) COLLATE utf8_bin NOT NULL,
  `Password` varchar(250) COLLATE utf8_bin NOT NULL,
  `UserType` varchar(250) COLLATE utf8_bin NOT NULL,
  `Address` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Name`, `UserName`, `Email`, `ContactNO`, `NID`, `Gender`, `Password`, `UserType`, `Address`) VALUES
(1, 'Namiur Rahman', 'admin1', 'naimur@gmail.com', '01688158696', '12345748532', 'Male', '12345', 'admin', 'Cumilla'),
(4, 'undefined', 'sadat123', 'undefined', 'undefined', '123-456-789', 'Male', 'undefined', 'manager', 'undefined'),
(6, 'sadat', 'admin2', 'sadat@gmail.com', 'N/A', '244-242-242', 'Male', '12345', 'admin', 'Ctg'),
(7, 'Oishi', 'oishi123', 'oishi@gmail.com', '0182739101', '123-456-789', 'Female', '12345', 'user', 'Maymanshing'),
(10, 'Gazi', 'gazi123', 'gazi@gmail.com', '01521301278', '123-456-789', 'Male', '12345', 'manager', 'Dhaka'),
(12, 'Sadat Shafin', 'admin3', 'sadat@gmail.com', '01677158696', '2363467', 'Male', '12345', 'admin', 'Pabna'),
(13, 'Mr. XYZ', 'xyz123', 'xyz@gmail.com', '01688158696', '123-456', 'Male', '12345', 'admin', 'Dhaka'),
(14, 'Mr. XYZ', 'Abc123', 'xyz@gmail.com', '01688158696', '123-456', 'Male', '12345', 'admin', 'Dhaka'),
(15, 'Tania Karim', 'tania123', 'tania@gmail.com', '01688158696', '123-456-789', 'female', '12345', 'admin', 'Dhaka'),
(18, 'Shafiul', 'admin5', 'tania@gmail.com', '01688158696', '123-456-789', 'female', '12345', 'admin', 'Dhaka');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
