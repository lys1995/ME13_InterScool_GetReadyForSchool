CREATE TABLE [dbo].[EnglishQuiz] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Classification] nvarchar(max)  NOT NULL,
    [Difficulty] nvarchar(max)  NOT NULL,
    [GoalDescription] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'UniSet'
ALTER TABLE [dbo].[EnglishQuiz]
ADD CONSTRAINT [PK_EnglishQuiz]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO