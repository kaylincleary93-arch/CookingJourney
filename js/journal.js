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

const journalFormMessage =
    document.querySelector(
        "#journal-form-message"
    );
    
// APPlICATION STATE
let journalEntries = [];

// LOAD SAVED STATE
const savedJournalEntries = 
    localStorage.getItem("journalEntries");

if(savedJournalEntries !== null){
    journalEntries = JSON.parse(savedJournalEntries);
}

// FUNCTIONS
function renderJournalEntries(){

            if(journalEntriesContainer === null){return;}

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

                journalCard.dataset.entryId =
                    currentEntry.id;

                const titleElement = 
                    document.createElement("h3");

                titleElement.textContent = 
                    currentEntry.title;

                const dateElement = 
                    document.createElement(
                        "p"
                    );
                
                dateElement.textContent =
                    currentEntry.cookingDate;    

                dateElement.textContent =
                    `Cooking Date: ${currentEntry.cookingDate}`; 

                const ratingElement =
                    document.createElement(
                        "p"
                    );
                
                ratingElement.textContent = 
                    `Rating: ${currentEntry.session.rating} / 5`;
                
                const summaryElement =
                    document.createElement(
                        "p"
                    );

                summaryElement.textContent =
                    currentEntry.summary;        

                const recipeElement =
                    document.createElement(
                        "p"
                    );
                   
                recipeElement.textContent =
                    `Recipe: ${currentEntry.recipeName}`;

                const difficultyElement =
                    document.createElement(
                        "p"
                    );

                difficultyElement.textContent =
                    `Difficulty: ${currentEntry.session.difficulty}`;

                const prepTimeElement =
                    document.createElement(
                        "p"
                    );

                prepTimeElement.textContent =
                    `Prep Time: ${currentEntry.session.prepTime}`;

                const cookTimeElement =
                    document.createElement(
                        "p"
                    );

                cookTimeElement.textContent =
                    currentEntry.session.cookTime;

                const servingsElement =
                    document.createElement(
                        "p"
                    );

                servingsElement.textContent =
                    currentEntry.session.servings;

                const wouldMakeAgainElement =
                    document.createElement(
                        "p"
                    );

                wouldMakeAgainElement.textContent =
                    currentEntry.session.wouldMakeAgain;

                const wentWellElement =
                    document.createElement(
                        "p" 
                    );

                wentWellElement.textContent =
                    currentEntry.reflection.wentWell;    

                const deleteButton = 
                    document.createElement("button");
                
                deleteButton.textContent = 
                    "Delete";

                deleteButton.classList.add(
                    "journal-delete-button");

                journalCard.append(
                    titleElement);

                journalCard.append(
                    dateElement
                );

                journalCard.append(
                    ratingElement
                );

                journalCard.append(
                    summaryElement
                );
                
                journalCard.append(
                    recipeElement
                );    

                journalCard.append(
                    difficultyElement
                );

                journalCard.append(
                    prepTimeElement
                );

                journalCard.append(
                    cookTimeElement
                );

                journalCard.append(
                    servingsElement
                );

                journalCard.append(
                    wouldMakeAgainElement
                );

                journalCard.append(
                    wentWellElement
                );

                journalCard.append(
                    deleteButton
                );

                deleteButton.addEventListener(
                    "click",
                    function(){

                        const shouldDelete =
                            confirm(
                                "Delete this journal entry?"
                            );

                        if(!shouldDelete){
                            return;
                        }
                        
                        journalEntries =
                            journalEntries.filter(
                                function(journalEntry){
                                    return (
                                        journalEntry.id
                                        !== 
                                        currentEntry.id
                                    );
                                }
                            );
                            
                        localStorage.setItem(
                            "journalEntries",
                            JSON.stringify(
                                journalEntries
                            )
                        );

                        renderJournalEntries();
                    }
                );

                journalEntriesContainer.append(
                    journalCard);
                
                journalCard.classList.add("journal-card");
            }
        }

// INITIAL READER
renderJournalEntries();


console.log(journalEntries);

if( journalForm !== null)
    { 
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

                id: crypto.randomUUID(),

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

            localStorage.setItem(
                "journalEntries",
                JSON.stringify(journalEntries));

            journalFormMessage.textContent =
                "Entry added successfully"

            renderJournalEntries();

            
        }
    );
}