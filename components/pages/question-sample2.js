const questionSample2 = {
    template: (function() {/*
        <main>
            <div id = "inContent">
                <ul class="box">
                    <li class="item">
                        <h2 class="question">Q1.豊臣秀吉は三代将軍である。</h2>
                        <ul class="choises">
                            <li class="choise">
                                <input id="check1" class="check" type="checkbox">
                                <label for="check1">text1</label>
                            </li>
                            <li class="choise">
                                <input class="check" id="check2" type="checkbox">
                                <label for="check2">text2</label>
                            </li>
                            <li class="choise">
                                <input id="check3" class="check" type="checkbox">
                                <label for="check3">text1</label>
                            </li>
                            <li class="choise">
                                <input class="check" id="check4" type="checkbox">
                                <label for="check4">text2</label>
                            </li>
                        </ul>
                    </li>
                    <li class="item">
                        <h2 class="question">Q2.豊臣秀吉は三代将軍である。</h2>
                        <ul class="choises">
                            <li class="choise">
                                <input id="check5" class="check" type="checkbox">
                                <label for="check5">text1</label>
                            </li>
                            <li class="choise">
                                <input class="check" id="check6" type="checkbox">
                                <label for="check6">text2</label>
                            </li>
                            <li class="choise">
                                <input id="check7" class="check" type="checkbox">
                                <label for="check7">text1</label>
                            </li>
                            <li class="choise">
                                <input class="check" id="check8" type="checkbox">
                                <label for="check8">text2</label>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button id="send-answer" @click='checkAnswerClick'>回答結果を確認</button>
            </div>
        </main>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    methods: {
        checkAnswerClick : function () {
            window.scrollTo(0,0);
            this.$router.push({name: 'answerSample1'})
        }
    }
}