-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.34 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for xpe-tcc-projeto-aplicado
CREATE DATABASE IF NOT EXISTS `xpe-tcc-projeto-aplicado` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `xpe-tcc-projeto-aplicado`;

-- Dumping structure for table xpe-tcc-projeto-aplicado.acervo
CREATE TABLE IF NOT EXISTS `acervo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ano_de_lancamento` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `quantidade_em_estoque` int DEFAULT NULL,
  `disciplina` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table xpe-tcc-projeto-aplicado.acervo: ~5 rows (approximately)
DELETE FROM `acervo`;
INSERT INTO `acervo` (`id`, `titulo`, `ano_de_lancamento`, `quantidade_em_estoque`, `disciplina`) VALUES
	(1, 'Navegando pela Histório Moderna', '2020', 3, 'História'),
	(2, 'Biologia para ensino fundamental', '2015', 5, 'Biologia'),
	(3, 'Matemática de A a Z', '2018', 10, 'Matemática'),
	(4, 'Manual da Língua Portuguesa', '2022', 18, 'Português'),
	(5, 'English Course', '2021', 8, 'Inglês');

-- Dumping structure for table xpe-tcc-projeto-aplicado.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table xpe-tcc-projeto-aplicado.usuarios: ~1 rows (approximately)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id`, `email`, `senha`) VALUES
	(1, 'administrador@nodejs.com.br', 'administrador');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
