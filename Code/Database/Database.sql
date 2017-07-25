CREATE DATABASE  IF NOT EXISTS `SeniorProject2017` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `SeniorProject2017`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: SeniorProject2017
-- ------------------------------------------------------
-- Server version	5.5.54-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Course` (
  `CourseNumber` int(11) unsigned NOT NULL,
  `CourseName` varchar(45) NOT NULL,
  `Credits` int(11) unsigned NOT NULL,
  PRIMARY KEY (`CourseNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES (99,'Course Test',3),(123456,'Software and Data Modeling\n\nSoftware and Data',3),(654321,'Fundamentals of Computer Security',3),(3334455,'Mobile and Wireless Networks',3);
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employee` (
  `PantherID` varchar(20) NOT NULL,
  `FIUusername` varchar(20) NOT NULL,
  `Deparment` varchar(45) DEFAULT NULL,
  `OfficeRoom` varchar(20) DEFAULT NULL,
  `OfficePhone` varchar(10) DEFAULT NULL,
  `InstructorFlag` tinyint(1) unsigned NOT NULL,
  `EmployeeType` varchar(20) NOT NULL,
  `PortalUsername` varchar(20) NOT NULL,
  PRIMARY KEY (`PantherID`),
  UNIQUE KEY `FIUusername_UNIQUE` (`FIUusername`),
  UNIQUE KEY `Username_UNIQUE` (`PortalUsername`),
  UNIQUE KEY `PantherID_UNIQUE` (`PantherID`),
  CONSTRAINT `PortalUsername` FOREIGN KEY (`PortalUsername`) REFERENCES `User` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES ('112233','hex','SCIS','232','305-789-68',1,'Faculty','hex'),('445566','rblazek','SCIS','245','305-654-43',1,'Faculty','rblazek');
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EvaluationQuestions`
--

DROP TABLE IF EXISTS `EvaluationQuestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EvaluationQuestions` (
  `QuestionID` int(11) unsigned NOT NULL,
  `PantherCourseNumber` int(10) unsigned NOT NULL,
  `QuestionString` varchar(100) NOT NULL,
  `Poor` int(10) unsigned DEFAULT '0',
  `Fair` int(10) unsigned DEFAULT '0',
  `Good` int(10) unsigned DEFAULT '0',
  `VeryGood` int(10) unsigned DEFAULT '0',
  `Excellent` int(10) unsigned DEFAULT '0',
  `NoResponse` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`QuestionID`,`PantherCourseNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EvaluationQuestions`
--

LOCK TABLES `EvaluationQuestions` WRITE;
/*!40000 ALTER TABLE `EvaluationQuestions` DISABLE KEYS */;
/*!40000 ALTER TABLE `EvaluationQuestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Offering`
--

DROP TABLE IF EXISTS `Offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Offering` (
  `PantherCourseNumber` int(10) unsigned NOT NULL,
  `Section` varchar(20) DEFAULT NULL,
  `Classroom` varchar(20) NOT NULL,
  `Schedule` varchar(45) NOT NULL,
  `EnrollmentCap` int(10) unsigned NOT NULL,
  `EvaluationRespCount` int(10) unsigned DEFAULT '0',
  `InstructorID` varchar(20) NOT NULL,
  `TermID` int(10) unsigned NOT NULL,
  `CourseNumber` int(10) unsigned NOT NULL,
  PRIMARY KEY (`PantherCourseNumber`),
  KEY `InstructorID_idx` (`InstructorID`),
  KEY `TermID_idx` (`TermID`),
  KEY `CourseNumber_idx` (`CourseNumber`),
  CONSTRAINT `CourseNumber` FOREIGN KEY (`CourseNumber`) REFERENCES `Course` (`CourseNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `InstructorID` FOREIGN KEY (`InstructorID`) REFERENCES `Employee` (`PantherID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TermID` FOREIGN KEY (`TermID`) REFERENCES `Term` (`TermID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Offering`
--

LOCK TABLES `Offering` WRITE;
/*!40000 ALTER TABLE `Offering` DISABLE KEYS */;
INSERT INTO `Offering` VALUES (1,'RX1','ECS 141','1/14, 1/28, 2/11, 2/25, 3/4',20,0,'112233',1,123456),(2,'RX1, RX2','ECS 135','3/18, 4/1, 4/15, 4/29, 5/13',20,0,'445566',2,654321),(3,'RX1','ECS 322','11/2, 11/7, 11/11',0,0,'112233',3,3334455),(4,'RX1','ECS 142','11/23, 11/25, 11/27',0,0,'112233',1,99);
/*!40000 ALTER TABLE `Offering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Registration`
--

DROP TABLE IF EXISTS `Registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Registration` (
  `StudentID` varchar(20) NOT NULL,
  `PantherCourseNumber` int(10) unsigned NOT NULL,
  `isEvaluationReady` tinyint(1) NOT NULL DEFAULT '0',
  `Grade` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`StudentID`,`PantherCourseNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Registration`
--

LOCK TABLES `Registration` WRITE;
/*!40000 ALTER TABLE `Registration` DISABLE KEYS */;
INSERT INTO `Registration` VALUES ('112233',1,0,NULL),('112233',3,0,NULL),('223344',2,0,NULL),('223344',3,0,NULL),('334455',1,0,NULL),('334455',2,0,NULL);
/*!40000 ALTER TABLE `Registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sessions` (
  `id` int(11) NOT NULL,
  `sessionName` varchar(45) NOT NULL,
  `sessionCode` varchar(45) NOT NULL,
  `sessionDate` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES (1,'Professional MSIT Session 001','001','2017-08-17 03:00:00','Webinar'),(2,'The MSIT Program Session 002','003','2017-08-27 04:00:00','In-Person'),(3,'The MSIT Program Session 003','002','2017-09-07 08:30:00','Webinar & In-Person');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `PantherID` varchar(20) NOT NULL,
  `FIUusername` varchar(20) NOT NULL,
  `GraduationStatus` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  PRIMARY KEY (`PantherID`),
  UNIQUE KEY `FIUusername_UNIQUE` (`FIUusername`),
  UNIQUE KEY `Username_UNIQUE` (`Username`),
  KEY `Username_idx` (`Username`),
  CONSTRAINT `Username` FOREIGN KEY (`Username`) REFERENCES `User` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES ('112233','jane','undergrad','jane'),('223344','jdoe','undergrad','jdoe'),('334455','jfrag','undergrad','jfrag');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Term`
--

DROP TABLE IF EXISTS `Term`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Term` (
  `TermID` int(11) unsigned NOT NULL,
  `TermName` varchar(45) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  PRIMARY KEY (`TermID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Term`
--

LOCK TABLES `Term` WRITE;
/*!40000 ALTER TABLE `Term` DISABLE KEYS */;
INSERT INTO `Term` VALUES (1,'Miniterm 1','2017-01-07','2017-03-04'),(2,'Miniterm 2','2017-03-18','2017-05-13'),(3,'Miniterm 3','2017-12-12','2018-12-12');
/*!40000 ALTER TABLE `Term` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Textbook`
--

DROP TABLE IF EXISTS `Textbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Textbook` (
  `ISBN` varchar(20) NOT NULL,
  `Title` varchar(45) NOT NULL,
  `Authors` varchar(150) NOT NULL,
  `Edition` varchar(10) DEFAULT NULL,
  `Publisher` varchar(45) DEFAULT NULL,
  `PantherCourseNumber` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ISBN`),
  UNIQUE KEY `ISBN_UNIQUE` (`ISBN`),
  KEY `PantherCourseNumber_idx` (`PantherCourseNumber`),
  CONSTRAINT `PantherCourseNumber` FOREIGN KEY (`PantherCourseNumber`) REFERENCES `Offering` (`PantherCourseNumber`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Textbook`
--

LOCK TABLES `Textbook` WRITE;
/*!40000 ALTER TABLE `Textbook` DISABLE KEYS */;
INSERT INTO `Textbook` VALUES ('9780073376257','Object-Oriented Software Engineering: An Agil','David Kung','1st (2013)','McGraw Hill',1),('9780133773927','Computer Security, Principles and practice','Stallings and Brown','3rd','Pearson',2);
/*!40000 ALTER TABLE `Textbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ticket`
--

DROP TABLE IF EXISTS `Ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ticket` (
  `TicketID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Description` longtext NOT NULL,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` varchar(20) NOT NULL DEFAULT 'Open',
  `NumberofResponses` int(11) unsigned NOT NULL DEFAULT '0',
  `UsernamePortal` varchar(20) NOT NULL,
  PRIMARY KEY (`TicketID`),
  KEY `UsernamePortal` (`UsernamePortal`),
  CONSTRAINT `UsernamePortal` FOREIGN KEY (`UsernamePortal`) REFERENCES `User` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ticket`
--

LOCK TABLES `Ticket` WRITE;
/*!40000 ALTER TABLE `Ticket` DISABLE KEYS */;
INSERT INTO `Ticket` VALUES (1,'Test ticket','2017-07-21 22:48:08','Resolved',6,'jcasa'),(2,'This should show up.','2017-07-10 14:20:54','Open',2,'jcasa'),(3,'This is another test ticket.','2017-07-10 13:17:53','Open',0,'jcasa'),(4,'--------Updated by \' on 07/10/2017 14:12--------\r\n\r\nUpdate.\r\n\r\n--------Created by \' on 07/10/2017 14:12 PM--------\r\n\r\nThis is a ticket.\r\n\r\n','2017-07-10 14:25:47','Open',1,'jcasa'),(5,'--------Created by \' on 07/10/2017 14:28 PM--------\r\n\r\nWonder if this will work.\r\n\r\n','2017-07-10 14:28:19','Open',0,'jcasa'),(6,'--------Created by \' on 07/10/2017 14:30 PM--------\r\n\r\nTesting responses.\r\n\r\n','2017-07-10 14:30:13','Open',1,'jcasa'),(7,'Information Sessions link not working','2017-07-19 21:14:17','Closed',2,'jfrag'),(8,'--------Created by \'jcasa\' on 07/16/2017 20:12 PM-------- What will happen here? ','2017-07-16 20:16:20','Open',0,'jcasa'),(9,'--------Updated by \'jcasa\' on 07/16/2017 20:22--------\r\n\r\nWhat about this?\r\n\r\n--------Created by \'jcasa\' on 07/16/2017 20:21 PM--------\r\n\r\nThis should now work.\r\n\r\n','2017-07-16 20:22:57','Open',1,'jcasa'),(10,'Student Test Ticket','2017-07-17 03:57:32','Closed',0,'jfrag1'),(11,'Information Sessions link not working 2','2017-07-21 22:47:12','Closed',0,'jfrag'),(17,'test blah ','2017-07-18 02:08:43','Closed',0,'jfrag'),(18,'--------Created by \'jfrag\' on 07/17/2017 5:03 AM--------\r\n\r\nTest\r\n\r\n','2017-07-17 05:09:20','Open',0,'jcasa'),(19,'Test','2017-07-17 19:21:34','Open',0,'jfrag1'),(20,'My Web Page does not load','2017-07-19 00:19:13','Closed',1,'jfrag'),(21,'Test','2017-07-23 16:41:03','Resolved',1,'jfrag'),(22,'This is a ticket from Test.','2017-07-21 18:01:04','Closed',0,'jcasa2'),(23,'I have a problem registering for COP 4619.','2017-07-22 00:50:00','Resolved',2,'jcasa2'),(27,'Web page does not load','2017-07-23 16:36:41','Closed',1,'test123');
/*!40000 ALTER TABLE `Ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TicketResponse`
--

DROP TABLE IF EXISTS `TicketResponse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TicketResponse` (
  `ResponseID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `TicketID` int(11) unsigned NOT NULL,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Description` varchar(150) NOT NULL,
  `UsernamePortal` varchar(20) NOT NULL,
  PRIMARY KEY (`ResponseID`,`TicketID`),
  KEY `Username_Portal` (`UsernamePortal`),
  CONSTRAINT `Username_Portal` FOREIGN KEY (`UsernamePortal`) REFERENCES `User` (`Username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TicketResponse`
--

LOCK TABLES `TicketResponse` WRITE;
/*!40000 ALTER TABLE `TicketResponse` DISABLE KEYS */;
INSERT INTO `TicketResponse` VALUES (1,7,'2017-07-17 01:58:49','Response to 7','jfrag'),(1,10,'2017-07-17 01:58:49','Response to 10','jfrag2'),(2,7,'2017-07-17 01:58:49','Response to 7 (2)','jfrag'),(38,1,'2017-07-18 01:58:11','TEST RESPONSE','jfrag2'),(39,1,'2017-07-18 01:59:42','Ticket has been resolved. Please check your Page.','jfrag2'),(40,20,'2017-07-18 02:15:50','Web page as been fixed. Please restart your browser.','jfrag2'),(41,1,'2017-07-19 21:16:32','Response','jfrag2'),(42,1,'2017-07-20 21:59:01','Response Test','jcasa'),(43,1,'2017-07-21 17:45:10','This is an update.','jcasa'),(44,1,'2017-07-21 22:48:08','Response','jfrag2'),(45,23,'2017-07-21 23:30:24','You have been added to this class,','jcasa'),(46,23,'2017-07-22 00:50:00','I have registered you for this course.','jcasa'),(47,25,'2017-07-23 15:20:30','My Web Page does not load','test1'),(48,26,'2017-07-23 15:36:59','More Info','test123'),(49,27,'2017-07-23 16:36:23','More info','test123'),(50,21,'2017-07-23 16:41:03','Reponse','jfrag2');
/*!40000 ALTER TABLE `TicketResponse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `Username` varchar(20) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `MiddleInitial` varchar(1) DEFAULT NULL,
  `LastName` varchar(30) NOT NULL,
  `Gender` varchar(1) NOT NULL,
  `Password` varchar(150) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `StreetAddress` varchar(100) NOT NULL,
  `Apt_Building` varchar(100) DEFAULT NULL,
  `City` varchar(45) NOT NULL,
  `State` varchar(2) NOT NULL,
  `ZipCode` varchar(10) NOT NULL,
  `Country` varchar(45) NOT NULL,
  `UserType` varchar(20) NOT NULL,
  `Hash` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Username`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('hex','Xudong',NULL,'He','M','1e867fa1a3a64ab5e1ee21bd76f05912','hexTEST@cis.fiu.edu','123-123-6789','117 SW',NULL,'Miami','Fl','33187','United States','Faculty','dcf1be2b4293b13528e498a7c75a6e57'),('jane','Jane','','Casa','F','0cbc6611f5540bd0809a388dc95a615b','jswsq@frr','33432424','42342424','','Miami','FL','4342','United States','Student','e20b5e388dc2e121a5dc2b2697dad92d'),('jcasa','Jose',NULL,'Casanova','M','5185529fd45b366f0e667813f70ac24a','jcasanova90@gmail.com','305-485-8341','12534 NW 7 St.',NULL,'Miami','Fl','33182','United States','Administrator','fe181c2ff7819e953709121f6e70a777'),('jcasa2','Test',NULL,'Guest','m','96a90f6c7895a7f7f2088ddac2d33578','test@fake.com','111-111-1111','999 SE ',NULL,'Miami','FL','33988','United States','Guest','7f57a0c189a90ba4908247d8fac7ff11'),('jdoe','John','','Doe','M','7343704fe162b66763d2afbab7175287','jdoe@gmail.com','305-444-4444','12345 NW 2th St','','Miami','FL','12345','United States','Student',NULL),('jfrag','Joana',NULL,'Fraga','f','1e867fa1a3a64ab5e1ee21bd76f05912','Test@test.com','123-123-1234','112 SW',NULL,'Miami','FL','33156','USA','Guest','e20b5e388dc2e121a5dc2b2697dad92d'),('jfrag1','Joana',NULL,'Fraga','f','5185529fd45b366f0e667813f70ac24a','test@test','123-123-1234','112 SW',NULL,'Miami','FL','33156','USA','Student','fe181c2ff7819e953709121f6e70a777'),('jfrag2','Joana',NULL,'Fraga','f','1e867fa1a3a64ab5e1ee21bd76f05912','test@test1','123-123-1234','112 SW',NULL,'Miami','FL','33156','USA','Administrator','dcf1be2b4293b13528e498a7c75a6e57'),('rblazek','Rick',NULL,'Blazek','M','1e867fa1a3a64ab5e1ee21bd76f05912','rblazek@cs.fiu.edu','123-123-6789','117 SW',NULL,'Miami','FL','33145','United States','Faculty','dcf1be2b4293b13528e498a7c75a6e57'),('test1','TestFirst','T','TestLast','f','d9f170fd9dc9813a5762a5bf13c7ee1a','test@test12','123-123-1234','112 SW',NULL,'Miami','FL','33156','United States','Guest','ab2fc348511aa10f43d7eb19c74609e8'),('test123','TestFirst',NULL,'TestLast','f','d9f170fd9dc9813a5762a5bf13c7ee1a','testqatest15@gmail.com','123-123-1234','112 SW',NULL,'Miami','FL','33156','United States','Student','a1c147ae8772bb3b864de28f2efdef15');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-24 20:43:52
