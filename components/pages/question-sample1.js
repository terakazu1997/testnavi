var timerId;
const questionSample1 = {
    template: (function() {/*
        <main>
            <question-modal v-if="readyModal" @closemodal="closeReadyModal()" />
            <div id = "inContent" v-if="!readyModal">
                <timer @checkAnswer="checkAnswer"/>
                <ul class="box">
                    <li class="question1-item" v-for="(QuestionObject,itemIndex) in QuestionObjects" :key="QuestionObject.questionId">
                        <p class="question-count">Q{{itemIndex + 1}}</p>
                        <div class="question-title">
                            <h2 class="question">{{QuestionObject.question}}</h2>
                        </div>
                        <ul class="choises">
                            <li class="choise" v-for="(choise,choiseIndex) in QuestionObject.choises" :key="choiseIndex">
                                <input :id="QuestionObject.questionId + choiseIndex" class="check" type="checkbox" v-model="checkNames" :value="itemIndex+1 + '-' + QuestionObject.questionId + '-' + choiseIndex">
                                <label :for="QuestionObject.questionId + choiseIndex">{{choise}}</label>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button id="send-answer" @click="checkAnswerClick">回答結果を確認</button>
            </div>
        </main>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    data: function () {
        return {
            timerCount: 600,
            QuestionObjects: QuestionObjects.concat(),
            checkNames: [],
            readyModal: true
        }
    },
    components: {
        'timer': timer,
        'questionModal': questionModal
    },
    computed: {
        shapingCheckNames: function(){
            var shapeCheckNameArray = []
            for(var checkName of this.checkNames){
                var checkNameSplit = checkName.split('-')
                shapeCheckNameArray.push({
                    questionNumber:parseInt(checkNameSplit[0]),
                    questionId: checkNameSplit[1],
                    checkNumber: parseInt(checkNameSplit[2])
                })
            }
            return shapeCheckNameArray
        }
    },
    methods:{
        closeReadyModal: function() {
            window.scrollTo(0,0);
            this.readyModal = false
        },
        checkAnswerClick: function () {
            var checkCount=1;
            var checkAnswerFlg=true
            
            //shapingeCheckNamsからキーがquestionNumberのもののみを取得
            var questionNumbers = this.shapingCheckNames.concat().map(function(row){
                return[row['questionNumber']]
                }).reduce(function(a,b){
                    return a.concat(b)
                })
            var checkErrorMessage='以下の問題の選択がされていません。\n'
            //重複の削除
            questionNumbers = questionNumbers.filter(function(x,i,self){
                return self.indexOf(x) === i;
            })
            for(var i=1; i <11; i++){
                if(questionNumbers.indexOf(i) === -1 ){
                    checkErrorMessage += 'Q'+checkCount+' '
                    checkAnswerFlg = false
                }
                checkCount++
            }
            if(checkAnswerFlg){
                this.checkAnswer()
            }else{
                alert(checkErrorMessage+'\nチェックをしてください')
            }
        },
        sortObjects: function(a,b) {
            if (a.questionNumber < b.questionNumber) return -1;
            if (a.questionNumber > b.questionNumber) return 1;
            if (a.checkNumber < b.checkNumber) return -1;
            if (a.checkNumber > b.checkNumber) return 1;
            return 0;
        },
        checkAnswer: function () {
            var index = 0
            var answerIndex = 0
            var okCnt = 0
            var checkNames = this.shapingCheckNames.sort(this.sortObjects)

            for(var checkName of checkNames){
                while(checkName['questionId'] !== this.QuestionObjects[index].questionId){
                    if(this.QuestionObjects[index].answer.length === answerIndex){
                        okCnt += 1
                    }
                    answerIndex = 0;
                    index += 1
                }
                if(!this.QuestionObjects[index].yourAnswer){
                    this.QuestionObjects[index]['yourAnswer']= []
                }
                this.QuestionObjects[index].yourAnswer.push(checkName['checkNumber'])
                if(parseInt(checkName['checkNumber']) !== this.QuestionObjects[index].answer[answerIndex]){
                    answerIndex += 100;
                    continue;
                }
                answerIndex += 1;
            }
            if(QuestionObjects[index].answer.length === answerIndex){
                okCnt += 1
            }
            window.scrollTo(0,0);
            this.$router.push({name: 'answerSample1' ,params: {okCnt: okCnt ,QuestionObjects: this.QuestionObjects}})
        }
    }
}