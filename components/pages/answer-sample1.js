const answerSample1 = {
    template: (function() {/*
        <main>
            <div id = "inContent">
            <div v-if="QuestionObjects">
                <section class="answer-head">
                    <h3>テストお疲れ様でした！結果確認！！</h3>
                    <div class="result-message">
                        <p class="large">xxxxxxxxさん、{{questionCnt}}問中{{okCnt}}問正解です。</p>
                        <div v-if="questionCnt===okCnt"> 
                            <p class="small">おめでとうございます。資格を取得することができました。</p>
                            <p class="small">この資格は2xxx年xx月xx日まで有効です</p>
                        </div>
                        <div v-else>
                            <p class="small">全問正解すれば、資格を取得できます。</p>
                        </div>
                    </div>
                </section>
                <ul class="box">
                    <li class="answer-item" v-for="(QuestionObject,index) in QuestionObjects" :key="QuestionObject.questionId">
                        <div class="question-title">
                            <h2 class="question">Q{{index + 1}}.{{QuestionObject.question}}</h2>
                        </div>
                        <ul class="choises clear-fix">
                            <li v-for="(choise,index) in QuestionObject.choises" :key="index">
                                <label>{{choise}}</label>
                            </li>
                        </ul>
                        <p class="answer-main">解答・解説</p>
                        <p v-if="QuestionObject.yourAnswer"  class="answer-sentence">あなたの解答は
                            <span v-for="yourAnswer in QuestionObject.yourAnswer" :key="yourAnswer">
                                {{QuestionObject.choises[yourAnswer]}}
                            </span>
                        </p>
                        <p v-else class="answer-sentence">
                            制限時間オーバーで入力がありませんでした。
                        </p>
                        <p class="answer-sentence">正解は
                            <span v-for="answer in QuestionObject.answer" :key="answer">
                                {{QuestionObject.choises[answer]}}
                            </span>
                        </p>
                        <p class="answer-sentence">{{QuestionObject.answerSentence}}</p>
                    </li>
                </ul>
                <button id="send-answer" @click="restartClick">もう一度チャレンジ！！</button>
            </div>
            <div v-else>
                <section class="answer-head">
                    <h3>ErrorPage 直接解答ページに遷移できません。遷移したい場合は、必ず受講をしてください</h3>
                </section>
                <button id="send-answer" @click="restartClick" style="margin-top:30px;">受講開始</button>
            </div>
            </div>
        </main>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    data: function () {
        return {
            QuestionObjects: this.$route.params.QuestionObjects,
            questionCnt: QuestionObjects.length,
            okCnt: this.$route.params.okCnt,
            checkNames: []
        }
    },
    methods: {
        restartClick : function () {
            window.scrollTo(0,0)
            this.$router.push({name: 'questionSample1'})
        }
    }
}