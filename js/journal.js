const journalForm = 
    document.querySelector(".journal-form");

const entryTitleInput= 
    document.querySelector("#entry-title");

const cookingDateInput =
    document.querySelector("#cooking-date");

const recipeNameInput =
    document.querySelector("#recipe-name");

const shortSummaryInput =
    document.querySelector("#short-summary");

const recipeRatingInput =
    document.querySelector("#recipe-rating");

const difficultyInput =
    document.querySelector("#difficulty");

const prepTimeInput =
    document.querySelector("#prep-time");

const cookTimeInput =
    document.querySelector("#cook-time");

const servingsInput =
    document.querySelector("#servings");

const wouldMakeAgainInput =
    document.querySelector("#would-make-again");

const wentWellInput =
    document.querySelector("#went-well");

const wasDifficultInput =
    document.querySelector("#was-difficult");

const lessonLearnedInput =
    document.querySelector("#lesson-learned");

const nextGoalInput =
    document.querySelector("#next-goal");

const changesThisTimeInput =
    document.querySelector("#changes-this-time");

const journalEntriesContainer = 
    document.querySelector(".journal-entries");
    
const journalEntries = [];

console.log(journalEntries);

journalForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const entryTitle =
            entryTitleInput.value;

        const cookingDate =
                cookingDateInput.value;

        const recipeName =
                recipeNameInput.value;

        const shortSummary =
                shortSummaryInput.value;

        const recipeRating =
               Number(recipeRatingInput.value);

        const difficulty =
                difficultyInput.value;
        
        const prepTime =
                Number(prepTimeInput.value);

        const cookTime =
                Number(cookTimeInput.value);

        const servings =
                Number(servingsInput.value);

        const wouldMakeAgain =
                wouldMakeAgainInput.value;

        const wentWell =
                wentWellInput.value;

        const wasDifficult =
                wasDifficultInput.value;

        const lessonLearned =
                lessonLearnedInput.value;

        const nextGoal =
                nextGoalInput.value;

        const changesThisTime =
                changesThisTimeInput.value;

        const journalEntry = {
            title: entryTitle,
            cookingDate: cookingDate,
            recipeName: recipeName,
            summary: shortSummary,

            session: {
                rating: recipeRating,
                difficulty: difficulty,
                prepTime: prepTime,
                cookTime: cookTime,
                servings:servings,
                wouldMakeAgain: wouldMakeAgain
            },

            reflection:{
                wentWell:wentWell,
                wasDifficult: wasDifficult,
                lessonLearned: lessonLearned,
                nextGoal: nextGoal,
                changesThisTime: changesThisTime
            }    
        };

        journalEntries.push(journalEntry);

        renderJournalEntries();

        function renderJournalEntries(){
            journalEntriesContainer.innerHTML = "";

            for(
                let index = 0;
                index < journalEntries.length;
                index = index + 1
            ){

                const currentEntry =
                    journalEntries[index];
                
                const journalCard = 
                    document.createElement("article");

                const titleElement = 
                    document.createElement("h3");

                titleElement.textContent = 
                    currentEntry.title;

                journalCard.append(
                    titleElement);

                const dateElement = 
                    document.createElement(
                        "p"
                    );
                
                dateElement.textContent =
                    currentEntry.cookingDate;    

                dateElement.textContent =
                    `Cooking Date: ${currentEntry.cookingDate}`; 

                journalCard.append(
                    dateElement
                );


                const ratingElement =
                    document.createElement(
                        "p"
                    );
                
                ratingElement.textContent = 
                    `Rating: ${currentEntry.session.rating} / 5`;
                
                journalCard.append(
                    ratingElement
                );

                const summaryElement =
                    document.createElement(
                        "p"
                    );

                summaryElement.textContent =
                    currentEntry.summary;

                journalCard.append(
                    summaryElement
                );

                const recipeElement =
                    document.createElement(
                        "p"
                    );
                   
                recipeElement.textContent =
                    `Recipe: ${currentEntry.recipeName}`;

                journalCard.append(
                    recipeElement
                );

                const difficultyElement =
                    document.createElement(
                        "p"
                    );

                difficultyElement.textContent =
                    `Difficulty: ${currentEntry.session.difficulty}`;

                journalCard.append(
                    difficultyElement
                );

                journalEntriesContainer.append(
                    journalCard);
                
                journalCard.classList.add("journal-card");
            }
        }
    }
);