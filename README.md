# Flashcard Application

# Words for Fluency
##Inspiration
# According to Helen Doron's site http://www.helendoron.com/arch_fluent_english.php, 

# The amount of words needed for different levels of fluency are as follows: 

# Crawl' level: 400-500 words, about 150 phrases. You can make yourself somewhat understood and understand slow speech.
# Mini level: 800-1000 words and 300 phrases. Now you can speak relatively well and unstrained, and can read newspapers and books with the aid of a dictionary.
# Midi level: 1500-2000 words and more than 300 phrases. What you need for day to day conversations. During the course of one day you need approximately this amount of vocabulary, and you can take part in serious discussions and understand what is being said at normal speed.
# 3000-4000 words: Sufficient for reading newspapers and magazines fluently.
# 8000 words: All you ever need. More words are not necessary in order to communicate freely and read all types of literature.

# If one is learning an Indo-European language or something listed as fairly easy
# for native English speakers to learn, we can assume that to be able to read periodicals fluently, one will need to know at least 3000 words. If one studies and learns 30 words every day, this baseline level can be achieved in 100 days, a little over three months.

# The purpose of this application is to encourage the user to study and practice 30 words a day, and to review previously learned words. The application will keep track of how many words have been studied and will report progress to the user as they progress. When different levels of words have been achieved, the program will alert the user of what level they are at. 

# A user will be able to study different languages, and the program will eventually keep track of levels of different languages. 

##Long-Term Goals -- Not Working on Just Yet
# Write the code to send appropriate reminder message using Twilio
# There should be different flashcard sets for the words learned:
# Daily
# Every three days
# Every week
# Every two weeks
# Every three weeks
# Monthly
# Every two months
# Every three months

# Scan documents and count words which are not included in any flashcards submitted. 
#Be able to create flashcards from internet browsing and clipping. 
# Eventually, it would be nice to be able to label the words by part of speech, and to create flashcards based on that.
#Set target amount of words to study, which will be the i
# When studying, the user will have the option to study in the following ways:
# Type in the right answer - done
# Show a graph of language-learning progress

##End Long-Term Goals

# Done:
# Be Able To enter flashcards - done
# Option to enter directly into program - done

# Be able to review flashcards - done
# Be able to save results - done 
# -Save the date when flashcard deck was made - done 
#Read from file and put data into the appropriate array - done

#TODO
#Sort out the stack level too deep error - PROBLEM
# Deploy code on Heroku - Slightly daunting
# Set up Heroku scheduler to send out the email weekly (for now this will be at 4 PM CST)

#Send email or text messages using Twilio.
#Hi #{user},

# Here are your results for this week:

# Day 1: 
# Rounds completed: total_rounds
# Average percentage correct: total_rounds#{percentage_correct}
# Words to work on: #{words_wrong}
#Words studied to date: 
#Words mastered
 #--"Mastered" words are words that have been correct five times. 

#Repeats for rest of the days in the week, gives weekly average as well.



#User file that tracks how many decks, how many words total studied, how many words they've "mastered". 
#Count the number of words that have been studied to date, and how many have been mastered. 

#Program needs to be able to read date ranges - not sure how to do yet
#Program needs to be able to track errors per day
#Display list of .csv (flashcards) and select (for each language); store in appropriate directory
#Second, multiple-choice quiz function - generate list of possible four answers, have user enter "a", "b", "c", or "d". 
#Option to test self on words gotten wrong. Program will use the incorrect_answers
# array to generate a new quiz is user wants to test oneself on words he or she
# had difficulty with. 
#total_rounds = fixnum
#percentages_per_round = array
