import { ref, onMounted, onUnmounted } from "vue";

export function useClock() {
    const hours = ref('');
    const minutes = ref('');
    const seconds = ref('');

    // Hàm cập nhật thời gian
    const updateClock = () => {
        const realTime = new Date();
        hours.value = realTime.getHours().toString().padStart(2, '0');
        minutes.value = realTime.getMinutes().toString().padStart(2, '0');
        seconds.value = realTime.getSeconds().toString().padStart(2, '0');
    };

    // Cập nhật thời gian ngay khi component được mount
    onMounted(() => {
        updateClock();
        const interval = setInterval(updateClock, 1000); 

        // Dọn dẹp interval khi component bị unmount
        onUnmounted(() => {
            clearInterval(interval);
        });
    });

    return {
        hours,
        minutes,
        seconds
    }
}
