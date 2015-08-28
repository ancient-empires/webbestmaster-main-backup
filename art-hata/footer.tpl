{*
* 2007-2013 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2013 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

		{if !$content_only}
				</div>

<!-- Right -->
			{*	<div id="right_column" class="column grid_2 omega">
					{$HOOK_RIGHT_COLUMN}
				</div> *}
			</div>

<!-- Footer -->
			<div id="footer" class="grid_9 alpha omega clearfix">
				{$HOOK_FOOTER}
			</div>
		</div>
	{/if}
<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = '165953';
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();</script>
<!-- BEGIN JIVOSITE INTEGRATION WITH ROISTAT -->
 <script>
    (function(w, d, s, h) {
        var p = d.location.protocol == "https:" ? "https://" : "http://";
        var u = "/dist/jivosite.js";
        var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
    })(window, document, 'script', 'cloud.roistat.com');
 </script>
 <!-- END JIVOSITE INTEGRATION WITH ROISTAT -->
<!-- {/literal} END JIVOSITE CODE -->
		<script type="text/javascript" src="/buyme/js/buyme.js"></script>
		<script type="text/javascript" charset="utf-8" src="/callme/js/callme.js"></script>		
		<script type="text/javascript">
/* init Call Service */
var CallSiteId = '99cb8ce73a743fe1acf0a15ce74e0d9c';
var CallBaseUrl = '//uptocall.com';
(function() {
    var lt = document.createElement('script');
    lt.type ='text/javascript';
    lt.charset = 'utf-8';
    lt.async = true;
    lt.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + CallBaseUrl + '/widget/client.js';
    var sc = document.getElementsByTagName('script')[0];
    if (sc) sc.parentNode.insertBefore(lt, sc);
    else document.documentElement.firstChild.appendChild(lt);
})();
</script>
<script type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=JWcCJqP0j0yJkDkphaUk5HyxW37dmEI0bzXcjiA9HUXhEh3GQuoqVQgsYD1QxI0Fahpk74IALTj6J*9EDUdRDRND87/D8dHHfbDBtoYv1Xu/IGieg/4hbtwM2i6zxf5AyUHUHhEz0IspdVp6RHKY4*TBjcVYPUoZ25DmKt/m53I-';</script>
<script>
(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
    var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', '7000');
</script>

<div class="js-form-container" style="display: none;">

    <div class="js-request-form-wrapper request-form-wrapper">
        <div class="js-close-form request-form-wrapper-close">close form</div>
        <form>
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="tel" name="tel" required placeholder="+375-..-...-..-.." value="+375 " />
            <select name="works-type">
                <option value="0">-- Выберите --</option>
                <option value="Картины">Картины</option>
                <option value="Скинали для кухни">Скинали для кухни</option>
                <option value="Фотообои">Фотообои</option>
                <option value="Широкоформатная печать">Широкоформатная печать</option>
            </select>
            <textarea name="content" placeholder="Couple of word about your self..." ></textarea>
            <input type="file" name="files" multiple title="Загрузите одну или несколько фотографий" />
            <input type="submit" value="send" />

            <input type="hidden" name="title" value="title"/>
            <input type="hidden" name="extra" value=""/>

        </form>
    </div>

</div>

<style>

    .fade-for-form {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .request-form-wrapper {
        position: absolute;
        width: 350px;
        top: 20%;
        left: 50%;
        margin-left: -175px;
        background-color: #fff;
    }

    .request-form-wrapper-close {
        background-image: url(/buyme/templates/default/close.png);
    }

    .request-form-wrapper input,
    .request-form-wrapper textarea {

    }

</style>




</body>
</html>
