<template>
  <div class="bg clearfix">
    <home-header :unLogin="unLogin"></home-header>
    <div class="type-page">
      <div class="top">
        <div id="user_photo" class="pull-left" @mouseenter="handleMouseOver"
             @mouseleave="handleMouseLeave">
          <img id="origin_ph" :src="$SERVER.FILEURL + userInfo.u_avatar" alt="头像" >
          <el-upload
            :action="$SERVER.URL + $SERVER.PATH + $SERVER.POST_UPIMG"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              id="change_ph"
              src="https://www.youzixy.com/Public/images/icon/mkhead_hover.png"
              alt="头像"
              v-if="show"
            >
          </el-upload>
        </div>
        <div id="user_msg">
          <div class="name">{{userInfo.u_name}}</div>
          <p class="has_sell">共有<span class="all">{{ count }}</span>件商品</p>
          <ul class="seller_attr">
            <li>学校：&nbsp;&nbsp;<span>{{userInfo.u_school}}</span></li>
            <li v-if="!userInfo.u_static">认证：&nbsp;&nbsp;<span>未认证</span></li>
            <li v-else>认证：&nbsp;&nbsp;<span>已认证</span></li>
          </ul>
          <Button type="primary" @click="edit">编辑个人信息</Button>
          <Button type="primary" @click="changePwd">修改密码</Button>
          <Modal
            v-model="modal"
            title="修改密码"
            >
            <Form :model="formItem" :label-width="80">
              <FormItem label="原始密码">
                <Input v-model="formItem.old_pwd" type="password" placeholder="请输入原始密码" style="width: 200px"></Input>
              </FormItem>
              <FormItem label="新密码">
                <Input v-model="formItem.new_pwd" type="password" placeholder="请输入新密码" style="width: 200px"></Input>
              </FormItem>
              <FormItem label="确认密码">
                <Input v-model="formItem.confirm_pwd" type="password" placeholder="再次填写确认" style="width: 200px"></Input>
              </FormItem>
            </Form>
            <div slot="footer">
              <Button type="primary" size="large" @click="ok">确认</Button>
              <Button type="default" size="large" @click="cancel">取消</Button>
            </div>
          </Modal>
        </div>
      </div>
      <Menu
        mode="horizontal"
        theme="light"
        :active-name="this.$route.path.slice(1)"
      >
        <MenuItem name="user/personal" to="/user/personal">
          <Icon type="ios-paper" />
          个人资料
        </MenuItem>
        <MenuItem name="user/sale" to="/user/sale">
          <Icon type="ios-people" />
          我发布的商品
        </MenuItem>
        <MenuItem name="user/buy" to="/user/buy">
          <Icon type="ios-people" />
          我购买的商品
        </MenuItem>
        <MenuItem name="user/collection" to="/user/collection">
        <Icon type="ios-construct" />
        我的收藏
        </MenuItem>
        <MenuItem name="user/message" to="/user/message" @click.native="clearNews">
          <Icon type="ios-construct" />
          消息中心
          <Badge :count="userInfo.u_news" v-if="userInfo.u_news !== 0">
            <a class="demo-badge"></a>
          </Badge>
        </MenuItem>
        <MenuItem name="user/identify" to="/user/identify">
          <Icon type="ios-construct" />
          认证信息
        </MenuItem>
        <MenuItem name="user/question" to="/user/question">
          <Icon type="ios-construct" />
          问题反馈
        </MenuItem>
      </Menu>
      <router-view></router-view>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import "index";
</style>
