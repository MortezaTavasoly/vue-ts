import { ref, computed } from "vue";

export const collapsed = ref<boolean>(true);

export const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

export const sidebarWidth = 180;
export const sidebarWidthCollapsed = 50;
export const sidebarWidthComputed = computed(
  (): string => `${collapsed.value ? sidebarWidthCollapsed : sidebarWidth}px`
);
