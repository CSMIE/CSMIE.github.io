layui.use(function(){
    var layer = layui.layer;
    var util = layui.util;
    var $ = layui.$;
    // 事件
    util.on('lay-on', {
        'test-skin-custom': function(){
            layer.open({
                type: 1,
                title: 'Announcement',
                offset: 't',
                anim: 'slideDown',
                skin: 'class-layer-demo-custom',
                area: '100%',
                shade: 0.1,
                shadeClose: true,
                id: 'ID-demo-layer-direction-t',
                content: '<div style="font-family:Arial, Helvetica, sans-serif;padding-right:40px;padding-left:20px;line-height:30px;text-align: justify;" ><h3>1. About Us</h3><p>"e-Course @ Computer Science and Technology"(e-Course) system is a lightweight teaching auxiliary website. You can browse your courses and course related materials in this website. In addition, e-Course is committed to providing students with targeted extracurricular resources for students to better learn the course.</p><h3>2. Privacy Notice</h3><p style="text-align: justify;"> e-Course is committed to protecting the privacy of students and others who visit and use our websites and online services. By accessing, viewing, or otherwise using the e-Course @ Computer Science and Technology (the “Site”) websites and services you acknowledge the Privacy Notice.</p><h3>3. Use of the Site; Compliance With Laws.</h3><p style="text-align: justify;">We appreciate your interest in the Site. This Site is made available for informational purposes. You may use this Site only for your own personal viewing and non-commercial use.</p><p style="text-align: justify;">Viewing and/or use of the Site is subject to the terms appearing in these Notices, which may be updated from time to time by CANVAS. Please be aware that certain pages linked to and/or included in the Site may include additional posted terms and/or policies. By accessing and/or using any portion of the Site, you are agreeing to the then-current terms and/or policies applicable to such portions of the Site, in addition to these terms.</p><p style="text-align: justify;">This Site is based in the China and intended only for the use of those who may legally access and use the Site under relevant P.R.C. laws and regulations. You agree to use this Site in compliance with any and all applicable laws and regulations. You may not use the Site for any unlawful purpose or engage in any conduct which restricts other users from enjoying the Site.</p><h3>4. Disclaimers; Links to Other Sites.</h3><p style="text-align: justify;">This Site is made available on an AS-IS, WHERE IS basis for informational purposes, and any and all implied warranties or duties are hereby disclaimed. This Site includes links to third-party sites which are not under the control of Site. The Site is not responsible for the content or operation of such sites, which may have their own terms. The inclusion a link to a third-party site does not imply endorsement by e-Course @ Computer Science and Technology.</p><p style="text-align: justify;">Visit<a href="https://computersciencekaoyan.github.io/Canvas/canvas.html" style="color: #008ee2;text-decoration: none;" target="_blank"> the Old website(ver1.0)</a></div>'
            });
        }
    });
});
