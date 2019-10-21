-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: churchdb
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `church`
--

DROP TABLE IF EXISTS `church`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `church` (
  `idchurch` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idchurch`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `church`
--

LOCK TABLES `church` WRITE;
/*!40000 ALTER TABLE `church` DISABLE KEYS */;
INSERT INTO `church` VALUES (7,'central church','-33.964080;25.614520'),(8,'newtorn park church','-33.948040;25.570870'),(9,'South end church','-33.974890;25.620580'),(10,'Limpopo church','-33.948040;25.570871'),(11,'JHB church','-33.948040;25.570881'),(12,'testreload','000:10');
/*!40000 ALTER TABLE `church` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `idperson` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `telephonenumber` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `isAlive` tinyint(4) DEFAULT NULL,
  `motherid` int(11) DEFAULT NULL,
  `fatherid` int(11) DEFAULT NULL,
  `isMarried` tinyint(4) DEFAULT NULL,
  `idchurch` int(11) DEFAULT NULL,
  PRIMARY KEY (`idperson`),
  UNIQUE KEY `idperson_UNIQUE` (`idperson`),
  KEY `fatherid_index` (`fatherid`),
  KEY `motherid_index` (`motherid`),
  KEY `churchid_foreign_idx` (`idchurch`),
  CONSTRAINT `churchid_foreign` FOREIGN KEY (`idchurch`) REFERENCES `church` (`idchurch`),
  CONSTRAINT `fatherid_foreign` FOREIGN KEY (`fatherid`) REFERENCES `person` (`idperson`),
  CONSTRAINT `motherid_foreign` FOREIGN KEY (`motherid`) REFERENCES `person` (`idperson`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'John','Smith','1962-06-06 00:00:00',NULL,'-33.9783333;25.5874001',NULL,NULL,NULL,NULL,NULL),(2,'John','Smith','2017-06-22 00:00:00',NULL,'-33.9599577;25.6241826',NULL,NULL,1,NULL,NULL),(3,'John','Smith','2017-06-22 00:00:00',NULL,'-33.9783333;25.5874001',1,NULL,1,NULL,NULL),(6,'Ndivhuwo','Mbaimbai','2001-11-15 00:00:00','','-33.9783333;25.5874001',1,2,3,1,NULL),(7,'Fathuwani','Mbaimbai','1988-02-24 00:00:00','00000','-33.9783333;25.5874001',1,3,1,1,NULL),(8,'fulu','mbaimbai','1993-01-01 00:00:00','000000','-33.9783333;25.5874001',1,7,6,1,8);
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-13 14:52:01
