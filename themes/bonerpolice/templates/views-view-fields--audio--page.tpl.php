<?php $item = array(); ?>
<?php foreach ($fields as $id => $field): ?>
  <?php $item[$id] = $field->content; ?>
<?php endforeach; ?>

<?php
$image = $item['field_mix_background'];
$pattern = '/src="([^"]*)"/';
preg_match($pattern, $image, $matches);
$image_src = $matches[1];
unset($matches);

?>
<div class="background-cover" style="background-image: url('<?php echo $image_src; ?>');">
  <div class="view-row-inner">
    <div class="title-wrapper">
      <h3 class="date-recorded"><?php echo $item['field_date_recorded']; ?></h3>
      <h2 class="title"><?php echo $item['title']; ?></h2>
    </div>
    <div class="cover"><?php echo $item['field_mix_cover']; ?></div>
  </div>
</div>