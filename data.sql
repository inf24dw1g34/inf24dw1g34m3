-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: library
-- ------------------------------------------------------
-- Server version	9.1.0

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
-- Table structure for table `Author`
--

DROP TABLE IF EXISTS `Author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `nationality` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Author`
--

LOCK TABLES `Author` WRITE;
/*!40000 ALTER TABLE `Author` DISABLE KEYS */;
INSERT INTO `Author` VALUES (1,'J.K. Rowling','British'),(2,'George Orwell','British'),(3,'Isaac Asimov','American'),(4,'Agatha Christie','British'),(5,'Stephen King','American'),(6,'J.R.R. Tolkien','British'),(7,'Jane Austen','British'),(8,'Yuval Noah Harari','Israeli'),(9,'Gabriel García Márquez','Colombian'),(11,'Albert Camus','French'),(12,'Peter Straub','American');
/*!40000 ALTER TABLE `Author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(512) NOT NULL,
  `publicationYear` varchar(512) DEFAULT NULL,
  `pageCount` int NOT NULL,
  `available` tinyint(1) NOT NULL,
  `genreId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES (1,'1984','1949',328,1,2),(2,'Animal Farm','1945',112,0,2),(3,'Foundation','1951',244,1,2),(4,'I, Robot','1950',224,1,2),(5,'The Hobbit','1937',310,0,3),(6,'The Fellowship of the Ring','1954',423,1,3),(7,'Pride and Prejudice','1813',279,1,7),(8,'Emma','1815',474,0,7),(9,'Sapiens','2011',498,1,5),(10,'Homo Deus','2015',464,1,5),(11,'One Hundred Years of Solitude','1967',417,1,1),(12,'Chronicle of a Death Foretold','1981',122,1,1),(13,'The Stranger','1942',123,1,10),(14,'The Plague','1947',308,1,10),(15,'It','1986',1138,1,8),(16,'Carrie','1974',199,1,8),(17,'Murder on the Orient Express','1934',256,1,4),(18,'And Then There Were None','1939',264,1,4),(19,'The Shining','1977',659,1,8),(20,'Misery','1987',320,1,8),(21,'Harry Potter and the Philosopher\'s Stone','1997',223,1,3),(22,'Harry Potter and the Chamber of Secrets','1998',251,1,3),(23,'Harry Potter and the Prisoner of Azkaban','1999',317,1,3),(24,'Brave New World','1932',268,1,2),(25,'Fahrenheit 451','1953',194,0,2),(26,'The Catcher in the Rye','1951',277,1,1),(27,'To Kill a Mockingbird','1960',281,1,1),(28,'The Great Gatsby','1925',180,1,1),(29,'War and Peace','1869',1225,1,1),(30,'Crime and Punishment','1866',671,1,1),(31,'The Art of War','-500',273,1,9),(32,'Meditations','180',254,1,10),(33,'Man\'s Search for Meaning','1946',200,1,9),(34,'Think and Grow Rich','1937',238,1,9),(35,'The 7 Habits of Highly Effective People','1989',381,1,9),(36,'Dune','1965',412,1,2),(37,'The Left Hand of Darkness','1969',304,1,2),(38,'Neuromancer','1984',271,1,2),(39,'The Talisman','1984',646,1,3);
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BookAuthorThrough`
--

DROP TABLE IF EXISTS `BookAuthorThrough`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BookAuthorThrough` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookId` int DEFAULT NULL,
  `authorId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookAuthorThrough`
--

LOCK TABLES `BookAuthorThrough` WRITE;
/*!40000 ALTER TABLE `BookAuthorThrough` DISABLE KEYS */;
INSERT INTO `BookAuthorThrough` VALUES (1,21,1),(2,22,1),(3,23,1),(4,1,2),(5,2,2),(6,24,2),(7,25,2),(8,3,3),(9,4,3),(10,17,4),(11,18,4),(12,15,5),(13,16,5),(14,19,5),(15,20,5),(16,5,6),(17,6,6),(18,7,7),(19,8,7),(20,9,8),(21,10,8),(22,11,9),(23,12,9),(24,26,9),(25,27,9),(26,28,9),(27,29,9),(28,30,9),(29,31,9),(30,32,9),(31,33,9),(32,34,9),(33,35,9),(34,36,9),(35,37,9),(36,38,9),(37,39,5),(38,39,12);
/*!40000 ALTER TABLE `BookAuthorThrough` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Genre`
--

DROP TABLE IF EXISTS `Genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genre`
--

LOCK TABLES `Genre` WRITE;
/*!40000 ALTER TABLE `Genre` DISABLE KEYS */;
INSERT INTO `Genre` VALUES (1,'Fiction'),(2,'Science Fiction'),(3,'Fantasy'),(4,'Mystery'),(5,'Biography'),(6,'History'),(7,'Romance'),(8,'Horror'),(9,'Self-help'),(10,'Philosophy');
/*!40000 ALTER TABLE `Genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Loan`
--

DROP TABLE IF EXISTS `Loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Loan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookId` int DEFAULT NULL,
  `memberId` int DEFAULT NULL,
  `loanDate` varchar(512) NOT NULL,
  `expectedReturnDate` varchar(512) NOT NULL,
  `returnDate` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Loan`
--

LOCK TABLES `Loan` WRITE;
/*!40000 ALTER TABLE `Loan` DISABLE KEYS */;
INSERT INTO `Loan` VALUES (4,1,2,'2003-10-20','2003-11-21','2003-11-20'),(5,2,3,'2024-04-23','2024-05-10','2024-05-09'),(6,3,7,'2020-07-17','2020-08-04','2020-09-20'),(7,1,2,'2023-01-10','2023-02-10','2023-02-08'),(8,3,5,'2023-01-15','2023-02-15',NULL),(9,7,8,'2023-01-20','2023-02-20','2023-02-18'),(10,12,10,'2023-02-01','2023-03-01','2023-02-28'),(11,4,3,'2023-02-05','2023-03-05',NULL),(12,6,6,'2023-02-10','2023-03-10','2023-03-09'),(13,9,9,'2023-02-15','2023-03-15',NULL),(14,11,1,'2023-02-20','2023-03-20','2023-03-18'),(15,13,4,'2023-03-01','2023-04-01','2023-03-30'),(16,15,7,'2023-03-05','2023-04-05',NULL),(17,18,11,'2023-03-10','2023-04-10','2023-04-08'),(18,20,14,'2023-03-15','2023-04-15',NULL),(19,22,16,'2023-03-20','2023-04-20','2023-04-19'),(20,25,18,'2023-04-01','2023-05-01','2023-04-29'),(21,28,20,'2023-04-05','2023-05-05',NULL),(22,30,22,'2023-04-10','2023-05-10','2023-05-09'),(23,33,24,'2023-04-15','2023-05-15','2023-05-14'),(24,35,26,'2023-04-20','2023-05-20',NULL),(25,37,28,'2023-05-01','2023-06-01','2023-05-30'),(26,2,29,'2023-05-05','2023-06-05','2023-06-03'),(27,5,30,'2023-05-10','2023-06-10',NULL),(28,8,15,'2023-05-15','2023-06-15','2023-06-14'),(29,10,13,'2023-05-20','2023-06-20',NULL),(30,14,19,'2023-06-01','2023-07-01','2023-06-29'),(31,17,23,'2023-06-05','2023-07-05','2023-07-04'),(32,19,25,'2023-06-10','2023-07-10',NULL),(33,21,12,'2023-06-15','2023-07-15','2023-07-14'),(34,24,17,'2023-06-20','2023-07-20',NULL),(35,27,21,'2023-07-01','2023-08-01','2023-07-31'),(36,29,27,'2023-07-05','2023-08-05',NULL);
/*!40000 ALTER TABLE `Loan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Member`
--

DROP TABLE IF EXISTS `Member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `phone` varchar(512) DEFAULT NULL,
  `address` varchar(512) NOT NULL,
  `registrationDate` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Member`
--

LOCK TABLES `Member` WRITE;
/*!40000 ALTER TABLE `Member` DISABLE KEYS */;
INSERT INTO `Member` VALUES (1,'John Smith','john.smith@example.com','1234567890','123 Maple Street, Springfield','2023-01-11'),(2,'Emily Johnson','emily.johnson@example.com','2345678901','456 Oak Avenue, Shelbyville','2023-02-15'),(3,'Michael Brown','michael.brown@example.com','3456789012','789 Pine Lane, Ogdenville','2023-03-20'),(4,'Sophia Davis','sophia.davis@example.com','4567890123','321 Elm Street, Capital City','2023-04-25'),(5,'James Wilson','james.wilson@example.com','5678901234','654 Cedar Road, Springfield','2023-05-30'),(6,'Olivia Martinez','olivia.martinez@example.com','6789012345','987 Birch Drive, Shelbyville','2023-06-05'),(7,'William Garcia','william.garcia@example.com','7890123456','741 Redwood Court, Ogdenville','2023-07-10'),(8,'Ava Rodriguez','ava.rodriguez@example.com','8901234567','852 Cherry Circle, Capital City','2023-08-15'),(9,'Ethan Anderson','ethan.anderson@example.com','9012345678','963 Walnut Way, Springfield','2023-09-20'),(10,'Isabella Thomas','isabella.thomas@example.com','1239874560','159 Willow Drive, Shelbyville','2023-10-25'),(11,'Liam Lee','liam.lee@example.com','2135467890','753 Aspen Lane, Ogdenville','2023-11-30'),(12,'Mia Hernandez','mia.hernandez@example.com','3456789120','357 Maple Circle, Capital City','2023-12-05'),(13,'Noah White','noah.white@example.com','4567890231','246 Oak Street, Springfield','2023-06-18'),(14,'Amelia Lewis','amelia.lewis@example.com','5678901342','135 Pine Avenue, Shelbyville','2023-07-21'),(15,'Logan Clark','logan.clark@example.com','6789012453','876 Elm Court, Ogdenville','2023-08-24'),(16,'Ella Robinson','ella.robinson@example.com','7890123564','234 Cedar Drive, Capital City','2023-09-27'),(17,'Mason Walker','mason.walker@example.com','8901234675','345 Birch Lane, Springfield','2023-10-30'),(18,'Charlotte Perez','charlotte.perez@example.com','9012345786','456 Redwood Street, Shelbyville','2023-11-02'),(19,'Alexander Hall','alexander.hall@example.com','1234567809','567 Cherry Avenue, Ogdenville','2023-12-05'),(20,'Sofia Young','sofia.young@example.com','2345678910','678 Walnut Street, Capital City','2023-06-08'),(21,'Benjamin King','benjamin.king@example.com','3456789021','789 Willow Court, Springfield','2023-07-12'),(22,'Harper Scott','harper.scott@example.com','4567890132','891 Aspen Circle, Shelbyville','2023-08-16'),(23,'Elijah Adams','elijah.adams@example.com','5678901243','213 Maple Drive, Ogdenville','2023-09-20'),(24,'Abigail Baker','abigail.baker@example.com','6789012354','324 Oak Lane, Capital City','2023-10-24'),(25,'Lucas Carter','lucas.carter@example.com','7890123465','435 Pine Street, Springfield','2023-11-28'),(26,'Aria Rivera','aria.rivera@example.com','8901234576','546 Elm Way, Shelbyville','2023-12-02'),(27,'Henry Flores','henry.flores@example.com','9012345687','657 Cedar Circle, Ogdenville','2023-06-04'),(28,'Grace Ramirez','grace.ramirez@example.com','1236789045','768 Birch Court, Capital City','2023-07-09'),(29,'Jack Turner','jack.turner@example.com','2347890156','879 Redwood Avenue, Springfield','2023-08-14'),(30,'Chloe Torres','chloe.torres@example.com','3458901267','981 Cherry Drive, Shelbyville','2023-09-19');
/*!40000 ALTER TABLE `Member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-08 23:20:23
