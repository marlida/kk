import { FC } from "react";
import { MagnifyingGlassIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface InputFilterProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const InputFilter: FC<InputFilterProps> = ({ value, onChange, placeholder }) => {
	return (
		<div className="relative mb-4 w-1/3">
			<Input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="w-full px-4 py-3 pl-10 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white"
			/>
			<MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
		</div>
	);
};

interface DropdownFilterProps {
	options: string[];
	value: string;
	onChange: (value: string) => void;
}

const DropdownFilter: FC<DropdownFilterProps> = ({ options, value, onChange }) => {
	return (
		<div className="relative mb-4 w-1/6">
			<Select value={value} onValueChange={onChange}>
				<SelectTrigger className="w-full px-4 py-3 pl-10 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:bg-white cursor-pointer shadow-sm hover:shadow-md">
					<CalendarDaysIcon className="absolute top-4.5 left-3 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
					<SelectValue placeholder="Select a date" />
				</SelectTrigger>
				<SelectContent>
					{options.map((option, index) => (
						<SelectItem
							key={index}
							value={option}
							className="text-gray-700 bg-white hover:bg-blue-50 py-2">
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export { InputFilter, DropdownFilter };
