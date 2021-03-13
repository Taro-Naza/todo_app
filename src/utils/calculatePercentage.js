export function completeTasksNum(array) {
	const completedTasks = array.filter(task => task.isFinished);
	return completedTasks.length;
}
export function calcualtePercentage(array) {
	const progressPercentge = (completeTasksNum(array) / array.length) * 100;
	return progressPercentge;
}
