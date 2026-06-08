-- CreateTable
CREATE TABLE `Paciente` (
    `idPaciente` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `matricula` VARCHAR(45) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `telefone` VARCHAR(11) NULL,
    `data_inscricao` DATE NOT NULL,
    `relato` VARCHAR(500) NULL DEFAULT 'SEM RELATO',
    `curso` VARCHAR(150) NULL,

    PRIMARY KEY (`idPaciente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colaborador` (
    `idBolsista` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `matricula` VARCHAR(45) NOT NULL,
    `data_admissao` DATE NOT NULL,
    `data_saida` DATE NULL,

    PRIMARY KEY (`idBolsista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListaEspera` (
    `idListaEspera` INTEGER NOT NULL AUTO_INCREMENT,
    `idPaciente` INTEGER NOT NULL,

    PRIMARY KEY (`idListaEspera`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListaRegular` (
    `idListaRegular` INTEGER NOT NULL AUTO_INCREMENT,
    `idPaciente` INTEGER NOT NULL,
    `idBolsista` INTEGER NOT NULL,

    PRIMARY KEY (`idListaRegular`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Protocolo` (
    `idProtocolo` INTEGER NOT NULL AUTO_INCREMENT,
    `data_inicio_atendimento` DATE NOT NULL,
    `qtde_sessoes` INTEGER NOT NULL DEFAULT 0,
    `idPaciente` INTEGER NOT NULL,
    `idBolsista` INTEGER NOT NULL,

    PRIMARY KEY (`idProtocolo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regular` (
    `idRegular` INTEGER NOT NULL AUTO_INCREMENT,
    `data_inicio_atendimento` DATE NOT NULL,
    `qtde_sessoes` INTEGER NOT NULL DEFAULT 0,
    `idPaciente` INTEGER NOT NULL,
    `idBolsista` INTEGER NOT NULL,

    PRIMARY KEY (`idRegular`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Historico` (
    `idHistorico` INTEGER NOT NULL AUTO_INCREMENT,
    `data_desligamento` DATE NULL,
    `idPaciente` INTEGER NOT NULL,
    `id_ultimo_bolsista` INTEGER NOT NULL,

    PRIMARY KEY (`idHistorico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ListaEspera` ADD CONSTRAINT `ListaEspera_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `Paciente`(`idPaciente`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaRegular` ADD CONSTRAINT `ListaRegular_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `Paciente`(`idPaciente`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaRegular` ADD CONSTRAINT `ListaRegular_idBolsista_fkey` FOREIGN KEY (`idBolsista`) REFERENCES `Colaborador`(`idBolsista`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Protocolo` ADD CONSTRAINT `Protocolo_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `Paciente`(`idPaciente`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Protocolo` ADD CONSTRAINT `Protocolo_idBolsista_fkey` FOREIGN KEY (`idBolsista`) REFERENCES `Colaborador`(`idBolsista`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regular` ADD CONSTRAINT `Regular_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `Paciente`(`idPaciente`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regular` ADD CONSTRAINT `Regular_idBolsista_fkey` FOREIGN KEY (`idBolsista`) REFERENCES `Colaborador`(`idBolsista`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico` ADD CONSTRAINT `Historico_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `Paciente`(`idPaciente`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico` ADD CONSTRAINT `Historico_id_ultimo_bolsista_fkey` FOREIGN KEY (`id_ultimo_bolsista`) REFERENCES `Colaborador`(`idBolsista`) ON DELETE CASCADE ON UPDATE CASCADE;
