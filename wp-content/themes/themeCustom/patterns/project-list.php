<?php

/**
 * Title: Project List
 * Slug: themeCustom/project-list
 * Categories: posts
 * Keywords: project list
 * Description: Project list
 */
?>

<!-- wp:query {"queryId":5,"query":{"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":null,"parents":[],"perPage":10},"align":"wide","className":"product-list","layout":{"type":"default"}} -->
<div class="wp-block-query alignwide product-list"><!-- wp:heading {"textAlign":"center","level":1,"className":"product-list__title","style":{"typography":{"fontStyle":"normal","fontWeight":"700"},"elements":{"link":{"color":{"text":"var:preset|color|black-800"}}},"spacing":{"margin":{"bottom":"48px"}}},"textColor":"black-800","fontSize":"max"} -->
    <h1 class="wp-block-heading has-text-align-center product-list__title has-black-800-color has-text-color has-link-color has-max-font-size" style="margin-bottom:48px;font-style:normal;font-weight:700">Project</h1>
    <!-- /wp:heading -->

    <!-- wp:post-template {"align":"wide","className":"product-list__template","style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"layout":{"type":"grid","columnCount":4}} -->
    <!-- wp:post-featured-image {"isLink":true,"width":"100%","height":"clamp(15vw, 30vh, 400px)","align":"wide","className":"product-list__featured-image"} /-->
    <!-- /wp:post-template -->
</div>
<!-- /wp:query -->