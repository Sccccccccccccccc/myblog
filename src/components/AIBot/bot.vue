<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false)

const chatText = ref('')

const setChatText = (text: string) => {
    chatText.value = text
}

// 中断控制器
let controller: AbortController | null = null

const showBotChat = () => {
    if (controller) {
        controller.abort()
        controller = null
        return
    }
    controller = new AbortController()
    const signal = controller.signal


    // 显示聊天窗口
    show.value = true
    console.log('showBotChat')
    let url = import.meta.env.VITE_APP_BASE_API + 'sse'
    const getRes = async () => {
        try {
            const res = await fetch( url, {
                method: "get",
                signal: signal,
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
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    cursor: pointer;
    transition: all 0.3s ease;

    animation: rgb 5s linear infinite;
}

.bot:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.msg {
    position: absolute;
    bottom: calc(100% + 1rem);
    right: 0;
    min-width: 100px;
    max-width: 180px;
    padding: 0.8rem 1rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
    font-weight: normal;
    line-height: 1.4;
    color: #333;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    pointer-events: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    text-align: left;
}

.bot:hover .msg {
    opacity: 1;
    transform: translateY(0);
}

.msg::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 1rem;
    border-width: 8px;
    border-style: solid;
    border-color: white transparent transparent transparent;
}


@keyframes rgb {
    0% { background-color: rgb(255, 0, 0, 0.5); }   
    14% { background-color: rgb(255, 127, 0, 0.5); } 
    28% { background-color: rgb(255, 255, 0, 0.5); }  
    42% { background-color: rgb(0, 255, 0, 0.5); }  
    57% { background-color: rgb(0, 0, 255, 0.5); } 
    71% { background-color: rgb(75, 0, 130, 0.5); }  
    85% { background-color: rgb(143, 0, 255, 0.5); }  
    100% { background-color: rgb(255, 0, 0, 0.5); } 
}

</style>