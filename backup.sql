-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: hoteldb
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hoteltable`
--

DROP TABLE IF EXISTS `hoteltable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoteltable` (
  `hotelID` int NOT NULL AUTO_INCREMENT,
  `hotelName` varchar(45) NOT NULL,
  `hotelLocation` varchar(200) NOT NULL,
  `hotelRating` int NOT NULL,
  `hotelNumber` varchar(50) NOT NULL,
  `hotelInformation` varchar(1000) NOT NULL,
  PRIMARY KEY (`hotelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoteltable`
--

LOCK TABLES `hoteltable` WRITE;
/*!40000 ALTER TABLE `hoteltable` DISABLE KEYS */;
/*!40000 ALTER TABLE `hoteltable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservationtable`
--

DROP TABLE IF EXISTS `reservationtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservationtable` (
  `reservationID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `roomID` int NOT NULL,
  `reservationStatus` enum('예약가능','예약취소','예약변경') DEFAULT NULL,
  `reservationDate` date DEFAULT (curdate()),
  `checkoutDate` date DEFAULT NULL,
  PRIMARY KEY (`reservationID`),
  KEY `fk_reservationTable_userTable1_idx` (`userID`),
  KEY `fk_reservationTable_roomTable1_idx` (`roomID`),
  CONSTRAINT `fk_reservationTable_roomTable1` FOREIGN KEY (`roomID`) REFERENCES `roomtable` (`roomID`),
  CONSTRAINT `fk_reservationTable_userTable1` FOREIGN KEY (`userID`) REFERENCES `usertable` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservationtable`
--

LOCK TABLES `reservationtable` WRITE;
/*!40000 ALTER TABLE `reservationtable` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservationtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviewtable`
--

DROP TABLE IF EXISTS `reviewtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviewtable` (
  `reviewID` int NOT NULL AUTO_INCREMENT,
  `hotelID` int NOT NULL,
  `userID` int NOT NULL,
  `hotelRating` int NOT NULL,
  `content` varchar(3000) DEFAULT NULL,
  `writeDate` date DEFAULT (curdate()),
  PRIMARY KEY (`reviewID`),
  KEY `fk_reviewTable_hotelTable1_idx` (`hotelID`),
  KEY `fk_reviewTable_userTable1_idx` (`userID`),
  CONSTRAINT `fk_reviewTable_hotelTable1` FOREIGN KEY (`hotelID`) REFERENCES `hoteltable` (`hotelID`),
  CONSTRAINT `fk_reviewTable_userTable1` FOREIGN KEY (`userID`) REFERENCES `usertable` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviewtable`
--

LOCK TABLES `reviewtable` WRITE;
/*!40000 ALTER TABLE `reviewtable` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviewtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomtable`
--

DROP TABLE IF EXISTS `roomtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roomtable` (
  `roomID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `hotelID` int NOT NULL,
  `roomType` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `roomPirce` int NOT NULL,
  `roomInformation` varchar(2000) NOT NULL,
  `reservationStatus` enum('예약가능','예약취소','예약변경') NOT NULL,
  `maximumPeople` int NOT NULL,
  PRIMARY KEY (`roomID`),
  KEY `fk_roomTable_hotelTable_idx` (`hotelID`),
  KEY `fk_roomTable_userTable1_idx` (`userID`),
  CONSTRAINT `fk_roomTable_hotelTable` FOREIGN KEY (`hotelID`) REFERENCES `hoteltable` (`hotelID`),
  CONSTRAINT `fk_roomTable_userTable1` FOREIGN KEY (`userID`) REFERENCES `usertable` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomtable`
--

LOCK TABLES `roomtable` WRITE;
/*!40000 ALTER TABLE `roomtable` DISABLE KEYS */;
/*!40000 ALTER TABLE `roomtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `birthday` date NOT NULL DEFAULT '2000-01-01',
  `email` varchar(50) NOT NULL,
  `punNumber` varchar(45) NOT NULL,
  `signUpDate` timestamp NULL DEFAULT NULL,
  `loginID` varchar(45) NOT NULL,
  `loginPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `loginID_UNIQUE` (`loginID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (1,'김갑','2000-01-01','ddd@naver.com','01012234566','2025-04-24 04:22:52','yss77','1234'),(6,'테스트용','2000-01-01','1234@1234','01025225464','2025-04-24 04:24:22','qwer','1234'),(9,'테스트','2000-01-01','id@naver.com','ddf','2025-04-24 04:34:39','we','zxd'),(11,'테스트sz','2000-01-01','id@naver.com','ddf','2025-04-24 04:37:07','wezz','zxd'),(12,'테스트sz','2000-01-01','id@naver.com','ddf','2025-04-24 04:37:10','wezzss','zxd'),(14,'권태준','2025-04-24','aaa@abc.com','01012345678','2025-04-29 00:58:50','asd','$2a$10$a2RvzruLNrnvqGJkxr1q2.rT0XwmHKpEymjoKnqaXzST5iQSarFla');
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-29 15:32:36
