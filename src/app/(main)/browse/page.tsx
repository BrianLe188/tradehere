"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/constants/products";
import Image from "next/image";
import { defaultImage } from "@/constants/default";

const categories = [
  "Electronics",
  "Accessories",
  "Sports",
  "Furniture",
  "Musical Instruments",
];
const conditions = ["Like New", "Excellent", "Good", "Fair"];

export default function Page() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [valueRange, setValueRange] = useState([0, 1000]);
  const [location, setLocation] = useState("any");
  const [sortBy, setSortBy] = useState("newest");
  const [localExchangeOnly, setLocalExchangeOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const applyFilters = () => {
    const result = products.filter(
      (product) =>
        (searchTerm === "" ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedConditions.length === 0 ||
          selectedConditions.includes(product.condition)) &&
        product.estimatedValue >= valueRange[0] &&
        product.estimatedValue <= valueRange[1] &&
        (location === "any" || product.location === location),
    );

    if (sortBy === "priceAsc") {
      result.sort((a, b) => a.estimatedValue - b.estimatedValue);
    } else if (sortBy === "priceDesc") {
      result.sort((a, b) => b.estimatedValue - a.estimatedValue);
    }

    setFilteredProducts(result);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedConditions([]);
    setValueRange([0, 1000]);
    setLocation("any");
    setSortBy("newest");
    setLocalExchangeOnly(false);
    setFilteredProducts(products);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Exchange Items</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Column */}
        <div className="w-full lg:w-1/4">
          <Collapsible
            open={isFilterOpen}
            onOpenChange={setIsFilterOpen}
            className="bg-muted p-4 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Filters</h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {isFilterOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-4">
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium mb-1"
                >
                  Search
                </label>
                <Input
                  id="search"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          setSelectedCategories((prev) =>
                            checked
                              ? [...prev, category]
                              : prev.filter((c) => c !== category),
                          );
                        }}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Condition
                </label>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center">
                      <Checkbox
                        id={`condition-${condition}`}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={(checked) => {
                          setSelectedConditions((prev) =>
                            checked
                              ? [...prev, condition]
                              : prev.filter((c) => c !== condition),
                          );
                        }}
                      />
                      <label
                        htmlFor={`condition-${condition}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Estimated Value Range
                </label>
                <Slider
                  min={0}
                  max={1000}
                  step={50}
                  value={valueRange}
                  onValueChange={setValueRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>${valueRange[0]}</span>
                  <span>${valueRange[1]}</span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-1"
                >
                  Location
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Location</SelectItem>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="Denver">Denver</SelectItem>
                    <SelectItem value="Seattle">Seattle</SelectItem>
                    <SelectItem value="Nashville">Nashville</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="local-exchange"
                  checked={localExchangeOnly}
                  onCheckedChange={setLocalExchangeOnly}
                />
                <label htmlFor="local-exchange" className="text-sm font-medium">
                  Local exchange only
                </label>
              </div>
              <div>
                <label
                  htmlFor="sort"
                  className="block text-sm font-medium mb-1"
                >
                  Sort by
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                    <SelectItem value="priceDesc">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={resetFilters}>
                  Reset
                </Button>
                <Button onClick={applyFilters}>Apply Filters</Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <Image
                    src={defaultImage}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <div className="flex justify-between items-center mt-2">
                    <Badge>{product.category?.name}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {product?.condition}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold">
                    Estimated Value: ${product?.estimatedValue}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {product?.location}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={defaultImage} />
                      <AvatarFallback>ANH</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">ANH</span>
                  </div>
                  <Button>Propose Exchange</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No items found matching your criteria.
              </p>
              <Button variant="link" onClick={resetFilters} className="mt-4">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
