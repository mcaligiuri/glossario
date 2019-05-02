-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 02, 2019 alle 09:57
-- Versione del server: 10.1.38-MariaDB
-- Versione PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Struttura della tabella `gls-argomento`
--

CREATE TABLE `gls-argomento` (
  `ida` int(11) NOT NULL,
  `argomento` varchar(50) NOT NULL,
  `codm` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Struttura della tabella `gls-materia`
--

CREATE TABLE `gls-materia` (
  `idm` int(11) NOT NULL,
  `materia` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Struttura della tabella `gls-termine`
--

CREATE TABLE `gls-termine` (
  `idt` int(11) NOT NULL,
  `coda` int(11) NOT NULL,
  `termine` varchar(50) NOT NULL,
  `definizione` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `gls-utente`
--

CREATE TABLE `gls-utente` (
  `idu` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `gls-utente`
--

INSERT INTO `gls-utente` (`idu`, `username`, `password`) VALUES
(1, 'prova', '189bbbb00c5f1fb7fba9ad9285f193d1');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `gls-argomento`
--
ALTER TABLE `gls-argomento`
  ADD PRIMARY KEY (`ida`);

--
-- Indici per le tabelle `gls-materia`
--
ALTER TABLE `gls-materia`
  ADD PRIMARY KEY (`idm`);

--
-- Indici per le tabelle `gls-termine`
--
ALTER TABLE `gls-termine`
  ADD PRIMARY KEY (`idt`);

--
-- Indici per le tabelle `gls-utente`
--
ALTER TABLE `gls-utente`
  ADD PRIMARY KEY (`idu`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `gls-argomento`
--
ALTER TABLE `gls-argomento`
  MODIFY `ida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT per la tabella `gls-materia`
--
ALTER TABLE `gls-materia`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `gls-termine`
--
ALTER TABLE `gls-termine`
  MODIFY `idt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT per la tabella `gls-utente`
--
ALTER TABLE `gls-utente`
  MODIFY `idu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
