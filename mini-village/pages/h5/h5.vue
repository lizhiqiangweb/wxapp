<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url" @message="getMessage"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
                url: ''

            }
        },
        onLoad(options) {
            if (options && options.url) {
                this.url = options.url;
            }
        },
        methods: {
        }
    }
</script>

<style lang="less">

</style>
