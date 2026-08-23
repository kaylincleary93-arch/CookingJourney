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
    
const urlParameters =
    new URLSearchParams(
        window.location.search
    );

const editingEntryId =
    urlParameters.get(
        "entryId"
    );
  
// APPlICATION STATE
let journalEntries = [];

let editingEntry = 
    null;

// LOAD SAVED STATE
const savedJournalEntries = 
    localStorage.getItem("journalEntries");

if(savedJournalEntries !== null){
    journalEntries = JSON.parse(savedJournalEntries);
}

if(editingEntryId !== null){
    editingEntry =
        journalEntries.find(
            function(journalEntry){

                return(journalEntry.id
                    ===
                    editingEntryId
                );
            }
        );

        entryTitleInput.value =
            editingEntry.title;
        
        cookingDateInput.value =
            editingEntry.cookingDate;

        recipeNameInput.value =
            editingEntry.recipeName;

        shortSummaryInput.value =
            editingEntry.summary;

        recipeRatingInput.value =
            editingEntry.session.rating;

        difficultyInput.value =
            editingEntry.session.difficulty;

        prepTimeInput.value =
            editingEntry.session.prepTime;

        cookTimeInput.value =
            editingEntry.session.cookTime;

        servingsInput.value =
            editingEntry.session.servings;

        wouldMakeAgainInput.value =
            editingEntry.session.wouldMakeAgain;
        
        wentWellInput.value = 
            editingEntry.reflection.wentWell;

        wasDifficultInput.value =
            editingEntry.reflection.wasDifficult;

        lessonLearnedInput.value =
            editingEntry.reflection.lessonLearned;

        nextGoalInput.value =
            editingEntry.reflection.nextGoal;

        changesThisTimeInput.value =
            editingEntry.reflection.changesThisTime;
    }    

console.log(editingEntry);



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

                const dateTitle =
                    document.createElement("strong");

                dateTitle.textContent=
                    "Cooking Date: "   

                dateElement.append(
                    dateTitle,
                    currentEntry.cookingDate
                ); 

                const recipeElement =
                    document.createElement(
                        "p"
                    );

                const recipeTitle =
                    document.createElement("strong");

                recipeTitle.textContent =
                    "Recipe: ";
                   
                recipeElement.append(
                    recipeTitle,
                    currentEntry.recipeName
                );

                const summaryElement =
                    document.createElement(
                        "p"
                    );
                
                const summaryTitle =
                    document.createElement("strong");

                summaryTitle.textContent=
                    "Summary: ";

                summaryElement.append(
                    summaryTitle,
                    currentEntry.summary
                );  

                const ratingElement =
                    document.createElement(
                        "p"
                    );

                const ratingTitle =
                    document.createElement("strong");

                ratingTitle.textContent =
                    "Rating: ";
                
                ratingElement.append(
                    ratingTitle, 
                    currentEntry.session.rating, "/ 5"
                );

                const difficultyElement =
                    document.createElement(
                        "p"
                    );

                const difficultyTitle =
                    document.createElement("strong");

                difficultyTitle.textContent =
                    "Difficulty: ";

                difficultyElement.append (
                    difficultyTitle,
                    currentEntry.session.difficulty
                );

                const prepTimeElement =
                    document.createElement(
                        "p"
                    );

                const prepTimeTitle =
                    document.createElement("strong");

                prepTimeTitle.textContent =
                    "Prep Time: ";

                prepTimeElement.append(
                    prepTimeTitle,
                    currentEntry.session.prepTime
                );

                const cookTimeElement =
                    document.createElement(
                        "p"
                    );

                const cookTimeTitle =
                    document.createElement("strong");

                cookTimeTitle.textContent =
                    "Cook Time: ";

                cookTimeElement.append(
                    cookTimeTitle,
                    currentEntry.session.cookTime
                );   

                const servingsElement =
                    document.createElement(
                        "p"
                    );

                const servingsTitle =
                document.createElement("strong");

                servingsTitle.textContent =
                    "Servings: ";

                servingsElement.append(
                    servingsTitle,
                    currentEntry.session.servings
                );

                const wouldMakeAgainElement =
                    document.createElement(
                        "p"
                    );

                const wouldMakeAgainTitle =
                    document.createElement("strong");

                wouldMakeAgainTitle.textContent=
                    "Would Make Again? "

                wouldMakeAgainElement.append(
                    wouldMakeAgainTitle,
                    currentEntry.session.wouldMakeAgain
                );

                const wentWellElement =
                    document.createElement(
                        "p" 
                    );

                const wentWellTitle =
                    document.createElement("strong");

                wentWellTitle.textContent =
                    "Went Well: ";

                wentWellElement.append(
                    wentWellTitle,
                    currentEntry.reflection.wentWell
                );
                
                const lessonLearnedElement =
                    document.createElement(
                        "p"
                    );

                const lessonLearnedTitle =
                    document.createElement("strong");

                lessonLearnedTitle.textContent=
                    "Lesson Learned: ";

                lessonLearnedElement.append(
                    lessonLearnedTitle,
                    currentEntry.reflection.lessonLearned
                );

                const nextGoalElement =
                    document.createElement(
                        "p"
                    );

                const nextGoalTitle =
                    document.createElement("strong");

                nextGoalTitle.textContent=
                    "Next Goal: ";

                nextGoalElement.append(
                    nextGoalTitle,
                    currentEntry.reflection.nextGoal
                );

                const changesThisTimeElement =
                    document.createElement(
                        "p"
                    );

                const changesThisTimeTitle =
                    document.createElement("strong");

                changesThisTimeTitle.textContent=
                    "Changes This Time: ";

                changesThisTimeElement.append(
                    changesThisTimeTitle,
                    currentEntry.reflection.changesThisTime
                );

                const deleteButton = 
                    document.createElement("button");
                
                deleteButton.textContent = 
                    "Delete";

                deleteButton.classList.add(
                    "journal-delete-button");

                const editButton =
                    document.createElement("button");

                editButton.textContent =
                    "Edit";

                editButton.classList.add(
                    "journal-edit-button"
                );

                journalCard.append(
                    titleElement, 
                    dateElement,
                    recipeElement,
                    summaryElement,  
                    ratingElement,                                 
                    difficultyElement,
                    prepTimeElement,
                    cookTimeElement,
                    servingsElement,
                    wouldMakeAgainElement,
                    wentWellElement,
                    lessonLearnedElement,
                    nextGoalElement,
                    changesThisTimeElement,
                    deleteButton,
                    editButton
                ); 

                editButton.addEventListener(
                    "click",
                    function (){
                       window.location.href=
                       "add-journal-entry.html?entryId="
                       + currentEntry.id;
                    }
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

            if(editingEntry ===null){

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

        }

        else{
            editingEntry.title =
            entryTitle;

            console.log(editingEntry);
        }

            localStorage.setItem(
                "journalEntries",
                JSON.stringify(journalEntries));

            if(editingEntry === null){
                journalFormMessage.textContent =
                "Entry added successfully"
            }

            else{
                journalFormMessage.textContent =
                "Edits Saved";
            }

            renderJournalEntries();

            
        }
    );
}