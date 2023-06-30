<template>
 
    <div class="dialog">
        <header class="header">
            <div>我是弹框</div>
            <!-- <el-icon>
                <CloseBold />
            </el-icon> -->
            <span>x</span>
        </header>
        <main class="main">
            我是内容12321321321
        </main>
        <footer class="footer">
            <!-- <el-button size="small">取消</el-button>
            <el-button size="small" type="primary">确定</el-button> -->
            <button>取消</button>
            <button>确定</button>
        </footer>
    </div>
 
</template>
 
<script setup lang='ts'>
 
</script>
<style lang="less" scoped>
.dialog {
    width: 400px;
    height: 400px;
    background: #141414;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    // margin-left: -200px;
    // margin-top: -200px;
    transform: translate(-50%, -50%);
 
    .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #636466;
        padding: 10px;
        color: #CFD3DC;
    }
 
    .main {
        flex: 1;
        color: #CFD3DC;
        padding: 10px;
    }
 
    .footer {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        border-top: 1px solid #636466;
    }
}
</style>