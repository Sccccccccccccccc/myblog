<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false)

const chatText = ref('')

const setChatText = (text: string) => {
    chatText.value = text
}

const showBotChat = () => {
    // 显示聊天窗口
    show.value = true
    console.log('showBotChat')

    const getRes = async () => {
        try {
            const res = await fetch("http://localhost:3000/sse", {
                method: "get",
            });
            const reader = res.body?.getReader();
            let text = "";
            while (reader) {
                const { value, done } = await reader.read();
                const chars = new TextDecoder().decode(value);
                if (done) {
                    break;
                }
                console.log("chars", chars);
                
                const dataArray = chars.trim().split("\n\n");
                const jsonObjects = dataArray.map((data) => {
                    const jsonString = data.substring("data: ".length);
                    return JSON.parse(jsonString);
                });
                jsonObjects.forEach((item) => {
                    text += item.content;
                });
                setChatText(text);
            }
        } catch (err) {
            console.log(err);
        }
    }
    getRes()
}

</script>

<template>
    <div class="bot" @click="showBotChat">
        🤖
        <div class="msg">
            {{ chatText }}
        </div>
    </div>
</template>

<style scoped>
.bot {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: gray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 3;
    cursor: pointer;
}

.msg {
    position: absolute;
    top: -2rem;
    background: white;
    font-size: 14px;
    color: black;
    padding: 0 1rem;
    border-radius: 5px;
}



</style>