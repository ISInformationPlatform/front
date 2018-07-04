<template>
    <div>
        <h2>
            {{username}}
        </h2>
    </div>
</template>

<script>
export default {
  name: 'PersonDetail',
  props: ['username']
};
</script>
