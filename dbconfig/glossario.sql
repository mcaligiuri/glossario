-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Giu 14, 2026 alle 20:59
-- Versione del server: 12.3.2-MariaDB
-- Versione PHP: 8.5.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `glossario`
--
CREATE DATABASE IF NOT EXISTS `glossario` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `glossario`;

DELIMITER $$
--
-- Procedure
--
DROP PROCEDURE IF EXISTS `ELIMINAMATERIA`$$
CREATE DEFINER=`michele`@`localhost` PROCEDURE `ELIMINAMATERIA` (IN `V_ID` INT, IN `V_TIPO` CHAR(1) CHARSET utf8mb4)   BEGIN
    -- Gestione degli errori per la transazione dei dati
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
 
    -- Inizio della transazione
    START TRANSACTION;
      -- Se sto cancellando tutta la materia
      IF V_TIPO = 'M'  THEN
        -- Cancello argomenti e termini
        DELETE A, T 
        FROM gls_argomento  AS A JOIN gls_termine  AS T ON A.IDA = T.CODA WHERE A.CODM = V_ID;
        -- Cancello argomenti senza termini associati alla materia
        DELETE FROM gls_argomento WHERE CODM=V_ID;
        -- Cancello la materia
        DELETE FROM gls_materia  WHERE IDM=V_ID;
      END IF;
    -- Se sto cancellando solo un argomento
      IF V_TIPO = 'A' THEN
        -- cancello tutti i termini associati all'argomento e poi l'argomento stesso
        DELETE FROM gls_termine  WHERE coda=V_ID;
        DELETE FROM gls_argomento WHERE ida=V_ID;
      END IF;
    COMMIT;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `gls_argomento`
--

DROP TABLE IF EXISTS `gls_argomento`;
CREATE TABLE `gls_argomento` (
  `ida` int(11) NOT NULL,
  `argomento` varchar(50) NOT NULL,
  `codm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `gls_materia`
--

DROP TABLE IF EXISTS `gls_materia`;
CREATE TABLE `gls_materia` (
  `idm` int(11) NOT NULL,
  `materia` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `gls_termine`
--

DROP TABLE IF EXISTS `gls_termine`;
CREATE TABLE `gls_termine` (
  `idt` int(11) NOT NULL,
  `coda` int(11) NOT NULL,
  `termine` varchar(50) NOT NULL,
  `definizione` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `gls_utente`
--

DROP TABLE IF EXISTS `gls_utente`;
CREATE TABLE `gls_utente` (
  `idu` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dump dei dati per la tabella `gls_utente`
--

INSERT INTO `gls_utente` (`idu`, `username`, `password`) VALUES
(1, 'prova', '$2y$12$TxvOocZ5QGbIAZx2EkdQQ.3nwy5aULIWjvMesdYPl7cqRvZxpfbJC');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `gls_argomento`
--
ALTER TABLE `gls_argomento`
  ADD PRIMARY KEY (`ida`),
  ADD UNIQUE KEY `argomento_duplicato` (`argomento`);

--
-- Indici per le tabelle `gls_materia`
--
ALTER TABLE `gls_materia`
  ADD PRIMARY KEY (`idm`),
  ADD UNIQUE KEY `materia_duplicata` (`materia`);

--
-- Indici per le tabelle `gls_termine`
--
ALTER TABLE `gls_termine`
  ADD PRIMARY KEY (`idt`),
  ADD UNIQUE KEY `termine_duplicato` (`termine`);

--
-- Indici per le tabelle `gls_utente`
--
ALTER TABLE `gls_utente`
  ADD PRIMARY KEY (`idu`),
  ADD UNIQUE KEY `utente_duplicato` (`username`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `gls_argomento`
--
ALTER TABLE `gls_argomento`
  MODIFY `ida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT per la tabella `gls_materia`
--
ALTER TABLE `gls_materia`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT per la tabella `gls_termine`
--
ALTER TABLE `gls_termine`
  MODIFY `idt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT per la tabella `gls_utente`
--
ALTER TABLE `gls_utente`
  MODIFY `idu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
