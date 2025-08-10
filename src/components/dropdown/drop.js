const action = btn.dataset.action;
						if (action === "increment") {
								value++;
							}
						if (action === "decrement") {
								value--;
							}
						counter.textContent = value;