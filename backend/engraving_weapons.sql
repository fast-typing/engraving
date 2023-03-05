-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 05, 2023 at 06:26 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `engraving_weapons`
--

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `NAME` int(11) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `modifications`
--

CREATE TABLE `modifications` (
  `ID` int(11) NOT NULL,
  `MODEL_ID` int(11) NOT NULL,
  `NAME` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `ID` int(11) NOT NULL,
  `DATA` date NOT NULL,
  `STATUS` text COLLATE utf8_unicode_ci NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `MODEL_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ordering_model`
--

CREATE TABLE `ordering_model` (
  `MODEL_ID` int(11) NOT NULL,
  `MODIFICATIONS_ID` int(11) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `USERNAME` text COLLATE utf8_unicode_ci NOT NULL,
  `PASSWORD` text COLLATE utf8_unicode_ci NOT NULL,
  `MAIL` text COLLATE utf8_unicode_ci NOT NULL,
  `NUMBER` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `modifications`
--
ALTER TABLE `modifications`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `MODEL_ID3` (`MODEL_ID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USER_ID` (`USER_ID`),
  ADD KEY `MODEL_ID` (`MODEL_ID`);

--
-- Indexes for table `ordering_model`
--
ALTER TABLE `ordering_model`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `MODEL_ID2` (`MODEL_ID`),
  ADD KEY `MODIFICATIONS_ID` (`MODIFICATIONS_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `modifications`
--
ALTER TABLE `modifications`
  ADD CONSTRAINT `MODEL_ID3` FOREIGN KEY (`MODEL_ID`) REFERENCES `model` (`ID`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `MODEL_ID` FOREIGN KEY (`MODEL_ID`) REFERENCES `ordering_model` (`ID`),
  ADD CONSTRAINT `USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `ordering_model`
--
ALTER TABLE `ordering_model`
  ADD CONSTRAINT `MODEL_ID2` FOREIGN KEY (`MODEL_ID`) REFERENCES `model` (`ID`),
  ADD CONSTRAINT `MODIFICATIONS_ID` FOREIGN KEY (`MODIFICATIONS_ID`) REFERENCES `modifications` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
